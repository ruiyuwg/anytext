This topic describes how to build a streaming data lakehouse by using Realtime Compute for Apache Flink, Paimon, and StarRocks.

## Background

As digitalization advances, enterprises have an increasingly strong demand for the timeliness of data. For traditional data warehousing, batch jobs are periodically scheduled to add the changes that are generated within the previous period of time to the following layers of a data warehouse: operational data store (ODS), data warehouse detail (DWD), data warehouse service (DWS), and application data service (ADS). However, this method causes high latency and high costs. In most cases, the scheduling interval of batch jobs is 1 hour or even one day. Data consumers can view only the data of the previous scheduling cycle. In addition, data is updated in the way of overwriting data in partitions. The original data in the partitions must be read again before the data can be merged with the new changes to generate new result data.

To resolve the preceding issues of traditional data warehouses, you can use Realtime Compute for Apache Flink and Apache Paimon to build a streaming data lakehouse. The real-time computing capabilities of Realtime Compute for Apache Flink allow data to flow between data warehouse layers in real time. Data changes can also be delivered to downstream consumers with a minute-level latency based on the efficient update capability of Apache Paimon. Therefore, the streaming data lakehouse has advantages in terms of latency and cost.

For more information about the features of Apache Paimon, see [Key features](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector#3267cb80e1civ) and visit the [Apache Paimon official website](https://paimon.apache.org/).

## Architecture and benefits

### **Architecture**

Realtime Compute for Apache Flink is a powerful streaming compute engine that supports efficient processing of large amounts of real-time data. Apache Paimon is a data lake storage platform that allows you to process data in streaming and batch modes. Apache Paimon supports data updates with high throughput and data queries with low latency. Apache Paimon is deeply integrated with Realtime Compute for Apache Flink to provide an integrated streaming data lakehouse solution. The following figure shows the architecture of the streaming data lakehouse that is built by using Realtime Compute for Apache Flink, Apache Paimon, and StarRocks.

1.  Realtime Compute for Apache Flink writes data from a data source to Apache Paimon to form the ODS layer.
    
2.  Realtime Compute for Apache Flink subscribes to changelogs at the ODS layer for processing and then rewrites the data to Apache Paimon to form the DWD layer.
    
3.  Realtime Compute for Apache Flink subscribes to changelogs at the DWD layer for processing and then rewrites the data to Apache Paimon to form the DWS layer.
    
4.  StarRocks of E-MapReduce (EMR).reads data from an Apache Paimon external table and provides external data queries.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843511.png)

### **Benefits**

This solution provides the following benefits:

-   Each layer of Apache Paimon can deliver changelogs to the downstream storage with a minute-level latency. This reduces the latency of traditional data warehouses from hours or even days to minutes.
    
-   Each layer of Apache Paimon can directly receive changelogs. Data in partitions is not overwritten. This greatly reduces the cost of updating and revising data in traditional data warehouses and resolves the issues that data at the intermediate layer is not easy to query, update, or correct.
    
-   This solution provides a unified model and uses a simplified architecture. The logic of extract, transform, and load (ETL) operations is implemented based on Flink SQL. All data at the ODS layer, DWD layer, and DWS layer is stored in Apache Paimon. This reduces the architecture complexity and improves data processing efficiency.
    

This solution relies on three core capabilities of Apache Paimon. The following table describes the core capabilities.

**Core capability of Apache Paimon**

**Description**

Update of data in a primary key table

Apache Paimon uses the log-structured merge-tree (LSM-tree) at the underlying layer to implement efficient data updates.

For more information about Apache Paimon primary key tables, see [Primary Key Table](https://paimon.apache.org/docs/master/primary-key-table/overview/). For more information about the data structure of the underlying layer of Apache Paimon, see [File Layouts](https://paimon.apache.org/docs/master/concepts/basic-concepts/).

Incremental data generation mechanism

The incremental data generation mechanism is specified by the changelog-producer parameter. Apache Paimon can generate complete incremental data for any input data stream. Each UPDATE\_AFTER data record corresponds to an UPDATE\_BEFORE data record. This ensures that data changes can be completely passed to the downstream. For more information, see [Incremental data generation mechanism](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector#c6b80280f8dbb).

Data merging mechanism

The data merging mechanism is specified by the merge-engine parameter. When an Apache Paimon primary key table receives multiple data records that have the same primary key value, the Apache Paimon result table merges the data records into one data record to ensure the uniqueness of the primary key. Apache Paimon supports various data merging mechanisms, such as deduplication, partial-update, and aggregation. For more information, see [Merge engine](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector#11820d80e11tv).

## Best practices

This example shows how to build a streaming data lakehouse for an e-commerce platform to process and cleanse data and query data from upper-layer applications. This way, the data is layered and reused to support multiple business scenarios, such as report queries for transaction dashboard data analysis, behavioral data analysis, and user profile tagging, and personalized recommendations.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843513.png)

1.  Build the ODS layer: real-time ingestion of data in a business database into the data warehouse A MySQL database contains the following business tables: orders, orders\_pay, and product\_catalog. Realtime Compute for Apache Flink writes the data of these tables to Object Storage Service (OSS) in real time and stores the data in the Apache Paimon format to form the ODS layer.
    
2.  Build the DWD layer: wide table Realtime Compute for Apache Flink uses the partial-update data merging mechanism of Apache Paimon to combine data in the orders, orders\_pay, and product\_catalog tables into a wide table at the DWD layer and generate changelogs with a minute-level latency.
    
3.  Build the DWS layer: metric calculation Realtime Compute for Apache Flink consumes the changelogs of the wide table in real time, and uses the aggregation data merging mechanism of Apache Paimon to generate the user-merchant aggregate intermediate table named dwm\_users\_shops at the data warehouse middle (DWM) layer and finally generate the user aggregate metric table named dws\_users and the merchant aggregate metric table named dws\_shops at the DWS layer.
    

## **Prerequisites**

-   You have activated Data Lake Formation (DLF) and created a catalog. For more information, see [Get started with DLF](/help/en/dlf/dlf-2-0/getting-started/data-catalog-quick-start).
    
-   You have created a Realtime Compute for Apache Flink workspace. For more information, see [Create a workspace](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
-   You have created an Serverless StarRocks instance.
    

**Note**

Your Flink workspace, StarRocks instance, and DLF catalog must reside in the same region.

## **Version requirements**

Your Flink jobs run Ververica Runtime (VVR) 11.1.0 or later.

## Build a streaming data lakehouse

### **Prepare** a MySQL CDC **data source**

In this example, three business tables are created in a database named `order_dw` in an ApsaraDB RDS for MySQL instance, and data is inserted into the tables.

1.  [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/create-an-apsaradb-rds-for-mysql-instance).
    
    **Note**
    
    If your ApsaraDB RDS for MySQL and Flink workspace do not reside in the same VPC, see [How do I access other services across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#0f0ec3e8desii).
    
2.  [Create a database and an account](/help/en/rds/create-databases-and-accounts-for-an-apsaradb-rds-for-mysql-instance).
    
    Create a database named `order_dw` and create a privileged account or a standard account that has the read and write permissions on the `order_dw` database.
    
    Create three tables and insert data into the tables.
    
    ```
    CREATE TABLE `orders` (
      order_id bigint not null primary key,
      user_id varchar(50) not null,
      shop_id bigint not null,
      product_id bigint not null,
      buy_fee bigint not null,   
      create_time timestamp not null,
      update_time timestamp not null default now(),
      state int not null
    );
    
    CREATE TABLE `orders_pay` (
      pay_id bigint not null primary key,
      order_id bigint not null,
      pay_platform int not null, 
      create_time timestamp not null
    );
    
    CREATE TABLE `product_catalog` (
      product_id bigint not null primary key,
      catalog_name varchar(50) not null
    );
    
    -- Prepare data.
    INSERT INTO product_catalog VALUES(1, 'phone_aaa'),(2, 'phone_bbb'),(3, 'phone_ccc'),(4, 'phone_ddd'),(5, 'phone_eee');
    
    INSERT INTO orders VALUES
    (100001, 'user_001', 12345, 1, 5000, '2023-02-15 16:40:56', '2023-02-15 18:42:56', 1),
    (100002, 'user_002', 12346, 2, 4000, '2023-02-15 15:40:56', '2023-02-15 18:42:56', 1),
    (100003, 'user_003', 12347, 3, 3000, '2023-02-15 14:40:56', '2023-02-15 18:42:56', 1),
    (100004, 'user_001', 12347, 4, 2000, '2023-02-15 13:40:56', '2023-02-15 18:42:56', 1),
    (100005, 'user_002', 12348, 5, 1000, '2023-02-15 12:40:56', '2023-02-15 18:42:56', 1),
    (100006, 'user_001', 12348, 1, 1000, '2023-02-15 11:40:56', '2023-02-15 18:42:56', 1),
    (100007, 'user_003', 12347, 4, 2000, '2023-02-15 10:40:56', '2023-02-15 18:42:56', 1);
    
    INSERT INTO orders_pay VALUES
    (2001, 100001, 1, '2023-02-15 17:40:56'),
    (2002, 100002, 1, '2023-02-15 17:40:56'),
    (2003, 100003, 0, '2023-02-15 17:40:56'),
    (2004, 100004, 0, '2023-02-15 17:40:56'),
    (2005, 100005, 0, '2023-02-15 18:40:56'),
    (2006, 100006, 0, '2023-02-15 18:40:56'),
    (2007, 100007, 0, '2023-02-15 18:40:56');
    ```
    

### Register catalogs

#### Create a Paimon catalog in Flink

1.  Log on to [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/regions). Click **Console** in the **Actions** column of your workspace to enter the Development Console.
    
2.  In the left navigation menu, click **Catalogs**. On the **Catalogs** page, click **Create Catalog**.
    
3.  In the **Create Catalog** wizard, on the **Built-in Catalog** tab, select **Apache Paimon** and click **Next**.
    
4.  Set **metastore** to **dlf**, enter a name, and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Required?**
    
    **Remarks**
    
    **metastore**
    
    The metadata storage type.
    
    Yes
    
    Select **dlf**.
    
    **catalog name**
    
    The DLF catalog name.
    
    **Note**
    
    If you are using a RAM identity to register a catalog, ensure you have relevant read/write access to DLF. For more information, see [Data authorization management](/help/en/dlf/dlf-2-0/user-guide/manage-data-permissions).
    
    Yes
    
    Using [Latest DLF](/help/en/dlf/dlf-2-0/product-overview/product-introduction/) eliminates the need to configure AccessKey pairs and allows you to select an existing DLF catalog. For more information, see [Manage catalogs](/help/en/dlf/dlf-2-0/user-guide/manage-catalogs).
    
    This example selects `paimoncatalog`.
    
5.  Create a database (`order_dw`) in the Paimon catalog to receive data synced from the MySQL `order_dw` database.
    
    1.  In the left navigation menu, choose **Development** > **Scripts**.
        
    2.  Click **+** > **New Script**.
        
    3.  In the SQL editor, copy and paste the following code:
        
        ```
        -- Use paimoncatalog
        USE CATALOG paimoncatalog;
        -- Create the order_dw DB
        CREATE DATABASE order_dw;
        ```
        
    4.  Run the script. `The following statement has been executed successfully!` message indicates the database is created.
        

For more information, see [Manage Paimon catalogs](/help/en/flink/realtime-flink/user-guide/manage-apache-paimon-catalogs).

#### Create a MySQL catalog

1.  On the **Catalogs** page, click **Create Catalog**.
    
2.  On the **Built-in Catalog** tab of the **Create Catalog** dialog box, click **MySQL** and then click **Next**.
    
3.  Configure the parameters that are described in the following table and click **Confirm** to create a MySQL catalog named mysqlcatalog.
    
    **Parameter**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    catalog name
    
    The name of the catalog.
    
    Yes
    
    Enter a custom name. In this example, `mysqlcatalog` is used.
    
    hostname
    
    The endpoint used to access the MySQL database.
    
    Yes
    
    For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance). As the MySQL instance and Flink workspace reside in the same region, enter the internal endpoint.
    
    port
    
    The port number of the MySQL database. Default value: 3306.
    
    No
    
    For more information, see [View and manage instance endpoints and ports](/help/en/rds/apsaradb-rds-for-mysql/view-and-change-the-internal-and-public-endpoints-and-port-numbers-of-an-apsaradb-rds-for-mysql-instance).
    
    default-database
    
    The name of the default MySQL database.
    
    Yes
    
    In this example, enter `order_dw`.
    
    username
    
    The username used to access the MySQL database.
    
    Yes
    
    Enter your account created in the [Prepare a MySQL CDC data source](#1b45d9e082tel) section.
    
    password
    
    The password used to access the MySQL database.
    
    Yes
    
    Enter your password for the account created in the [Prepare a MySQL CDC data source](#1b45d9e082tel) section.
    

### Build the ODS layer: Real-time data ingestion into the data warehouse

Use Flink CDC to ingest data from MySQL to Paimon and build the ODS layer.

1.  Create a data ingestion job.
    
    1.  Log on to [Realtime Compute for Apache Flink's Management Console](https://realtime-compute.console.alibabacloud.com/regions). Click **Console** in the **Actions** column of your workspace to enter the Development Console.
        
    2.  In the left navigation menu, choose ******Development** > **ETL******. Click **+** > **New Blank Stream Draft**. In the **New Draft** dialog, enter `ods` in the **Name** field, choose a VVR version, and click **Create**. In the SQL editor, copy and paste the following code:
        
        ```
        source:
          type: mysql
          name: MySQL Source
          hostname: rm-bp1e********566g.mysql.rds.aliyuncs.com
          port: 3306
          username: ${secret_values.username}
          password: ${secret_values.password}
          tables: order_dw.\.*  # Read all tables in the MySQL DB order_dw.
          #(Optional) Replicate tables created in incremental phase
          scan.binlog.newly-added-table.enabled: true
          #(Optional) Replicate table and field comments
          include-comments.enabled: true
          #(Optional) Scan unbounded chunks first to prevent TM OOMs
          scan.incremental.snapshot.unbounded-chunk-first.enabled: true
          #(Optional) Scan deserialized data to speed up reads
          scan.only.deserialize.captured.tables.changelog.enabled: true
        
        sink:
          type: paimon
          name: Paimon Sink
          catalog.properties.metastore: rest
          catalog.properties.uri: http://ap-southeast-5-vpc.dlf.aliyuncs.com
          catalog.properties.warehouse: paimoncatalog
          catalog.properties.token.provider: dlf
          
        pipeline:
          name: MySQL to Paimon Pipeline
        ```
        
        **Configuration item**
        
        **Description**
        
        **Required?**
        
        **Example**
        
        `catalog.properties.metastore`
        
        The metastore type. Set it to `rest`.
        
        Yes
        
        rest
        
        `catalog.properties.token.provider`
        
        The token provider. Set it to `dlf`.
        
        Yes
        
        dlf
        
        `catalog.properties.uri`
        
        The DLF server URI. Format: `http://[region-id]-vpc.dlf.aliyuncs.com`. Replace `[region-id]` with your actual region ID (See [Endpoints](/help/en/dlf/dlf-2-0/getting-started/service-access-point)).
        
        Yes
        
        http://ap-southeast-5-vpc.dlf.aliyuncs.com
        
        `catalog.properties.warehouse`
        
        The DLF catalog name.
        
        Yes
        
        paimoncatalog
        
        You can configure Paimon table properties to improve write performance. For details, see [Performance tuning for Paimon tables](/help/en/flink/realtime-flink/use-cases/paimon-performance-optimization).
        
    3.  In the upper-right corner of the SQL editor, click **Deploy**.
        
    4.  In the left navigation menu, choose **O&M** > **Deployments**. On the **Deployments** page, find the job deployment `ods` and click **Start** in the **Actions** column. In the **Start Job** panel, select **Initial Mode** and click **Start**.
        
2.  View the data replicated from MySQL to Paimon.
    
    In the left navigation menu of the Development Console, choose **Development** > **Scripts**. Click **+** > **New Script** . In the SQL editor, copy and paste the following code, select the code, and click **Run**:
    
    ```
    SELECT * FROM paimoncatalog.order_dw.orders ORDER BY order_id;
    ```
    
    ![截屏2024-09-02 14](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843477.png)
    

### Build the DWD layer: Wide table

1.  #### Create a wide table named dwd\_orders at the DWD layer in Apache Paimon.
    
    In the left navigation menu of the Development Console, choose ****Development** > **Scripts****. On the **Scripts** tab, click **+** > **New Script**. In the SQL editor, copy and paste the following code, select the code, and then click **Run**:
    
    ```
    CREATE TABLE paimoncatalog.order_dw.dwd_orders (
        order_id BIGINT,
        order_user_id STRING,
        order_shop_id BIGINT,
        order_product_id BIGINT,
        order_product_catalog_name STRING,
        order_fee BIGINT,
        order_create_time TIMESTAMP,
        order_update_time TIMESTAMP,
        order_state INT,
        pay_id BIGINT,
        pay_platform INT COMMENT 'platform 0: phone, 1: pc',
        pay_create_time TIMESTAMP,
        PRIMARY KEY (order_id) NOT ENFORCED
    ) WITH (
        'merge-engine' = 'partial-update', -- Use the partial-update data merging mechanism to generate a wide table.
        'changelog-producer' = 'lookup' -- Use the lookup incremental data generation mechanism to generate changelogs with low latency.
    );
    ```
    
    If the `Query has been executed` message is returned, the table is created.
    
2.  #### Consume the changelogs of the orders and orders\_pay tables at the ODS layer in real time.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **ETL******. On the page that appears, click **+** > **New Blank Stream Draft** to create a draft named `dwd`. In the SQL editor, copy and paste the following code, and deploy the draft. Start the job deployment with initial states.
    
    The job joins the `orders` table with the dimension table named `product_catalog` and writes the join results and the data in the `orders_pay` table to the wide table named `dwd_orders`. In this process, the partial-update data merging mechanism of Apache Paimon is used to merge the data that has the same `order_id` value in the orders and `orders_pay` tables.
    
    ```
    SET 'execution.checkpointing.max-concurrent-checkpoints' = '3';
    SET 'table.exec.sink.upsert-materialize' = 'NONE';
    
    SET 'execution.checkpointing.interval' = '10s';
    SET 'execution.checkpointing.min-pause' = '10s';
    
    -- Apache Paimon does not allow you to use multiple INSERT statements to write data to the same table in the same job deployment. Therefore, UNION ALL is used in this example. 
    INSERT INTO paimoncatalog.order_dw.dwd_orders 
    SELECT 
        o.order_id,
        o.user_id,
        o.shop_id,
        o.product_id,
        dim.catalog_name,
        o.buy_fee,
        o.create_time,
        o.update_time,
        o.state,
        NULL,
        NULL,
        NULL
    FROM
        paimoncatalog.order_dw.orders o 
        LEFT JOIN paimoncatalog.order_dw.product_catalog FOR SYSTEM_TIME AS OF proctime() AS dim
        ON o.product_id = dim.product_id
    UNION ALL
    SELECT
        order_id,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        NULL,
        pay_id,
        pay_platform,
        create_time
    FROM
        paimoncatalog.order_dw.orders_pay;
    ```
    
3.  #### View the data of the wide table named dwd\_orders.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **Scripts******. On the **Scripts** tab, click **+** > **New Script**. In the SQL editor, copy and paste the following code, select the code, and then **Run**:
    
    ```
    SELECT * FROM paimoncatalog.order_dw.dwd_orders ORDER BY order_id;
    ```
    
    ![截屏2024-09-02 14](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843482.png)
    

### Build the DWS layer: Metric calculation

1.  Create aggregate metric tables named dws\_users and dws\_shops at the DWS layer.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **Scripts******. On the **Scripts** tab, click **+** > **New Script**. In the SQL editor, copy and paste the following code, select the code, and then **Run**:
    
    ```
    -- Create a user-dimension aggregate metric table. 
    CREATE TABLE paimoncatalog.order_dw.dws_users (
        user_id STRING,
        ds STRING,
        paid_buy_fee_sum BIGINT COMMENT 'Total amount of payment that is complete on the current day',
        PRIMARY KEY (user_id, ds) NOT ENFORCED
    ) WITH (
        'merge-engine' = 'aggregation', -- Use the aggregation data merging mechanism to generate an aggregate table.
        'fields.paid_buy_fee_sum.aggregate-function' = 'sum' -- Calculate the sum of the paid_buy_fee_sum data to generate the aggregate results.
        -- The dws_users table is not consumed by the downstream storage in streaming mode. Therefore, you do not need to specify the incremental data generation mechanism.
    );
    
    -- Create a merchant-dimension aggregate metric table. 
    CREATE TABLE paimoncatalog.order_dw.dws_shops (
        shop_id BIGINT,
        ds STRING,
        paid_buy_fee_sum BIGINT COMMENT 'Total amount of payment that is complete on the current day',
        uv BIGINT COMMENT 'Total number of users that purchase commodities on the current day',
        pv BIGINT COMMENT 'Total number of purchases made by all users on the current day',
        PRIMARY KEY (shop_id, ds) NOT ENFORCED
    ) WITH (
        'merge-engine' = 'aggregation', -- Use the aggregation data merging mechanism to generate an aggregate table.
        'fields.paid_buy_fee_sum.aggregate-function' = 'sum', -- Calculate the sum of the paid_buy_fee_sum data to generate the aggregate results.
        'fields.uv.aggregate-function' = 'sum', -- Calculate the sum of the unique visitor (UV) data to generate the aggregate results.
        'fields.pv.aggregate-function' = 'sum' -- Calculate the sum of the page view (PV) data to generate aggregate results.
        -- The dws_shops table is not consumed by the downstream storage in streaming mode. Therefore, you do not need to specify the incremental data generation mechanism.
    );
    
    -- To calculate data in the aggregate table from the user perspective and data in the aggregate table from the merchant perspective at the same time, create an intermediate table that uses the user_id and shop_id fields as the primary key. 
    CREATE TABLE paimoncatalog.order_dw.dwm_users_shops (
        user_id STRING,
        shop_id BIGINT,
        ds STRING,
        paid_buy_fee_sum BIGINT COMMENT 'Total amount paid by the user in the shop on the current day',
        pv BIGINT COMMENT 'Number of purchases made by the user in the shop on the current day',
        PRIMARY KEY (user_id, shop_id, ds) NOT ENFORCED
    ) WITH (
        'merge-engine' = 'aggregation', -- Use the aggregation data merging mechanism to generate an aggregate table.
        'fields.paid_buy_fee_sum.aggregate-function' = 'sum', -- Calculate the sum of the paid_buy_fee_sum data to generate the aggregate results.
        'fields.pv.aggregate-function' = 'sum', -- Calculate the sum of the PV data to generate the aggregate results.
        'changelog-producer' = 'lookup', -- Use the lookup incremental data generation mechanism to generate changelogs with low latency.
        -- In most cases, the intermediate table at the DWM layer does not provide queries for upper-layer applications. Therefore, the write performance can be optimized. 
        'file.format' = 'avro', -- Use the Avro row-oriented storage format to provide more efficient write performance. 
        'metadata.stats-mode' = 'none' -- Discard the statistical information. After the statistical information is discarded, the cost of online analytical processing (OLAP) queries increases but the write performance increases. This has no impact on continuous stream processing. 
    );
    ```
    
    If the `Query has been executed` message is returned, the tables are created.
    
2.  Consume the changelogs of the dwd\_orders table at the DWD layer.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **ETL******. On the page that appears, click **+** > **New Blank Stream Draft** to create a draft named `dwm`. In the SQL editor, copy and paste the following code, and deploy the draft. Start the job deployment with initial states.
    
    The job writes the data from the `dwd_orders` table to the `dwm_users_shops` table. In this process, the aggregation data merging mechanism of Apache Paimon is used to calculate the sum of the `order_fee` data to obtain the total consumption amount of the user in the shop. This job also calculates the number of data entries to obtain the number of purchases of the user in the shop.
    
    ```
    SET 'execution.checkpointing.max-concurrent-checkpoints' = '3';
    SET 'table.exec.sink.upsert-materialize' = 'NONE';
    
    SET 'execution.checkpointing.interval' = '10s';
    SET 'execution.checkpointing.min-pause' = '10s';
    
    INSERT INTO paimoncatalog.order_dw.dwm_users_shops
    SELECT
        order_user_id,
        order_shop_id,
        DATE_FORMAT (pay_create_time, 'yyyyMMdd') as ds,
        order_fee,
        1 -- One input record represents one purchase.
    FROM paimoncatalog.order_dw.dwd_orders
    WHERE pay_id IS NOT NULL AND order_fee IS NOT NULL;
    ```
    
3.  Consume the changelogs of the dwm\_users\_shops table at the DWM layer in real time.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **ETL******. On the page that appears, click **+** > **New Blank Stream Draft** to create a draft named `dws`. In the SQL editor, copy and paste the following code, and deploy the draft. Start the job deployment with initial states.
    
    The job writes the data from the `dwm_users_shops` table to the `dws_users` and `dws_shops` tables. In this process, the aggregation data merging mechanism of Apache Paimon is used to calculate the sum of the `paid_buy_fee_sum` data in the `dws_users` table to obtain the total consumption amount of the user in all shops, and to calculate the sum of the `paid_buy_fee_sum` data in the `dws_shops` table to obtain the total amount of business transactions of the shop. This job deployment also calculates the number of data entries to obtain the number of users who made purchases in the shop, and calculates the sum of PV data to obtain the total number of purchases made by all users in the shop.
    
    ```
    SET 'execution.checkpointing.max-concurrent-checkpoints' = '3';
    SET 'table.exec.sink.upsert-materialize' = 'NONE';
    
    SET 'execution.checkpointing.interval' = '10s';
    SET 'execution.checkpointing.min-pause' = '10s';
    
    -- Different from the DWD layer, multiple INSERT statements that write data to different Apache Paimon tables can be placed in the same deployment at the DWM layer. 
    BEGIN STATEMENT SET;
    
    INSERT INTO paimoncatalog.order_dw.dws_users
    SELECT 
        user_id,
        ds,
        paid_buy_fee_sum
    FROM paimoncatalog.order_dw.dwm_users_shops;
    
    -- The shop_id column is used as the primary key. The amount of data of specific popular shops may be much higher than the amount of data of other shops. 
    -- Therefore, local merge is used to aggregate data in the memory before data is written to Apache Paimon. This helps alleviate data skew issues. 
    INSERT INTO paimoncatalog.order_dw.dws_shops /*+ OPTIONS('local-merge-buffer-size' = '64mb') */
    SELECT
        shop_id,
        ds,
        paid_buy_fee_sum,
        1, -- One input record represents all the consumption of a user in the shop.
        pv
    FROM paimoncatalog.order_dw.dwm_users_shops;
    
    END;
    ```
    
4.  View the data of the dws\_users and dws\_shops tables.
    
    In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **Scripts******. On the **Scripts** tab, click **+** > **New Script**. In the SQL editor, copy and paste the following code, select the code, and then **Run**:
    
    ```
    -- View the data of the dws_users table.
    SELECT * FROM paimoncatalog.order_dw.dws_users ORDER BY user_id;
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843493.png)
    
    ```
    -- View the data of the dws_shops table.
    SELECT * FROM paimoncatalog.order_dw.dws_shops ORDER BY shop_id;
    ```
    
    ![截屏2024-09-02 14](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843484.png)
    

### Capture changes in the business database

The streaming data lakehouse is created. This section tests the capability of the streaming data lakehouse to capture changes in the business database.

1.  Insert the following data into the `order_dw` database of MySQL:
    
    ```
    INSERT INTO orders VALUES
    (100008, 'user_001', 12345, 3, 3000, '2023-02-15 17:40:56', '2023-02-15 18:42:56', 1),
    (100009, 'user_002', 12348, 4, 1000, '2023-02-15 18:40:56', '2023-02-15 19:42:56', 1),
    (100010, 'user_003', 12348, 2, 2000, '2023-02-15 19:40:56', '2023-02-15 20:42:56', 1);
    
    INSERT INTO orders_pay VALUES
    (2008, 100008, 1, '2023-02-15 18:40:56'),
    (2009, 100009, 1, '2023-02-15 19:40:56'),
    (2010, 100010, 0, '2023-02-15 20:40:56');
    ```
    
2.  View the data of the dws\_users and dws\_shops tables. In the left navigation menu of Realtime Compute for Apache Flink's Development Console, choose ******Development** > **Scripts******. On the **Scripts** tab, click **+** > **New Script**. In the SQL editor, copy and paste the following code, select the code, and then **Run**:
    
    -   `dws_users` table
        
        ```
        SELECT * FROM paimoncatalog.order_dw.dws_users ORDER BY user_id;
        ```
        
        ![截屏2024-09-02 15](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843494.png)
        
    -   `dws_shops` table
        
        ```
        SELECT * FROM paimoncatalog.order_dw.dws_shops ORDER BY shop_id;
        ```
        
        ![截屏2024-09-02 15](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843486.png)
        

## Use the streaming data lakehouse

The previous section describes how to create an Apache Paimon catalog and write data to an Apache Paimon table in the Realtime Compute for Apache Flink console. This section describes specific simple scenarios in which StarRocks is used to analyze data after the streaming data lakehouse is created.

Log on to the [StarRocks instance](https://emr.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.25c07c75Qrkg65#/region/cn-hangzhou/resource/all/serverless/starrocks/list) and create an Apache Paimon catalog.

```
CREATE EXTERNAL CATALOG paimon_catalog
PROPERTIES
(
    'type' = 'paimon',
    'paimon.catalog.type' = 'filesystem',
    'aliyun.oss.endpoint' = 'oss-cn-beijing-internal.aliyuncs.com',
    'paimon.catalog.warehouse' = 'oss://<bucket>/<object>'
);
```

**Parameter**

**Required**

**Description**

type

Yes

The type of the data source. Set the parameter to paimon.

paimon.catalog.type

Yes

The metadata storage type that is used by the Apache Paimon catalog. In this example, filesystem is used.

aliyun.oss.endpoint

Yes

The endpoint of OSS or OSS-HDFS. This parameter is required if you set the paimon.catalog.warehouse parameter to an OSS or OSS-HDFS path.

paimon.catalog.warehouse

Yes

The data warehouse directory that is specified in OSS. The format is oss://<bucket>/<object>. Where:

-   bucket: the name of the OSS bucket that you created.
    
-   object: the path in which your data is stored.
    

You can view the bucket name and object name in the [OSS console](https://oss.console.alibabacloud.com/).

### Perform ranking queries

Analyze the aggregate table at the DWS layer. The following sample code shows how to use StarRocks to query the top three shops with the highest transaction volume on February 15, 2023:

```
SELECT ROW_NUMBER() OVER (ORDER BY paid_buy_fee_sum DESC) AS rn, shop_id, paid_buy_fee_sum 
FROM dws_shops
WHERE ds = '20230215'
ORDER BY rn LIMIT 3;
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843686.png)

### **Perform details queries**

Analyze the wide table at the DWD layer. The following sample code shows how to use StarRocks to query the order details paid by a customer on a specific payment platform in February 2023:

```
SELECT * FROM dwd_orders
WHERE order_create_time >= '2023-02-01 00:00:00' AND order_create_time < '2023-03-01 00:00:00'
AND order_user_id = 'user_001'
AND pay_platform = 0
ORDER BY order_create_time;;
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843689.png)

### **Query data reports**

Analyze the wide table at the DWD layer. The following sample code shows how to use StarRocks to query the total number of orders and the total amount of orders for each category in February 2023:

```
SELECT
  order_create_time AS order_create_date,
  order_product_catalog_name,
  COUNT(*),
  SUM(order_fee)
FROM
  dwd_orders
WHERE
  order_create_time >= '2023-02-01 00:00:00'  and order_create_time < '2023-03-01 00:00:00'
GROUP BY
  order_create_date, order_product_catalog_name
ORDER BY
  order_create_date, order_product_catalog_name;
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3212710371/p843610.png)

## **References**

-   [Streaming lakehouse with Paimon](/help/en/flink/realtime-flink/use-cases/scheme-of-streaming-lakehouse-based-on-paimon/)
    
-   [Manage MySQL catalogs](/help/en/flink/realtime-flink/user-guide/manage-mysql-catalogs)
    
-   [Build a real-time data warehouse with Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres)
    
-   [Quick start with batch processing](/help/en/flink/realtime-flink/getting-started/create-a-batch-processing-workflow)
