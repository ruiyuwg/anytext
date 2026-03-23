Processing user behavior data is challenging due to its high volume and diverse formats. While traditional wide table models offer efficient query performance, they suffer from high data redundancy, increased storage costs, and are difficult to maintain and slow to update. This topic describes how to leverage Realtime Compute for Apache Flink, ApsaraDB for MongoDB, and Hologres for efficient user behavior analysis.

## Architecture and benefits

### **Architecture**

[Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/product-overview/what-is-alibaba-cloud-realtime-compute-for-apache-flink) is a powerful stream processing framework that supports efficient processing of large amounts of real-time data. [ApsaraDB for MongoDB](/help/en/mongodb/product-overview/what-is-apsaradb-for-mongodb) is a document-oriented NoSQL database that offers a flexible data schema, delivers excellent read/write performance, and supports complex query conditions. [Hologres](/help/en/hologres/product-overview/what-is-hologres) is an all-in-one data warehouse that supports real-time data writes and updates, where data can be queried immediately after it is written. The three services collaborate seamlessly to centrally process a diverse range of data, enabling real-time updates, queries, and analysis of large datasets. The architecture is as follows:

1.  A Flink job reads the change data capture (CDC) stream from MongoDB. When data is updated, the Flink job streams the primary keys (PKs) of the updated data to Kafka using the Upsert Kafka connector.
    
2.  If a dimension table is updated, the Flink job performs a lookup join to identify the corresponding records in the fact table and writes the PKs of affected data in the fact table to Kafka.
    
3.  A second Flink job consumes the PKs from Kafka, performs lookup joins against the MongoDB fact and dimension tables to reconstruct the complete wide-table record, and then updates the data in Hologres.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5173471671/CAEQThiBgICprNK_0RkiIGEwZWRhNTczZjc3ZDQ1MTNiOWZiZTRmOWUzM2NiNGIw4749990_20241107154419.359.svg)

### **Advantages**

This solution provides the following benefits:

-   **High Write Throughput and Scalable Storage:** ApsaraDB for MongoDB excels in high-concurrency read/write workloads, especially in sharded clusters. It can scale its performance and storage to accommodate large volumes of frequent data writes, eliminating potential write bottlenecks and storage limitations.
    
-   **Efficient Change Propagation:** When a fact or dimension table in MongoDB is updated, Flink identifies and streams only the PKs of the affected fact table records to Kafka. This change-driven approach ensures efficient updates, as only relevant data is reprocessed, regardless of the total data volume.
    
-   **Real-time Query and Analysis:** Hologres supports efficient, low-latency updates and allows data to be queried immediately after it is written. This enables real-time data analysis on the freshly updated table.
    

## Hands-on

This section demonstrates how to use Flink to process gamer purchase data in real time, build a wide table by joining fact and dimension tables, and write the results to Hologres for immediate querying.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5173471671/CAEQThiBgIDKntq_0RkiIDdiNGIxZDg1ZmFmNDQ4NjliODJkOTk3MGM3ZTlkOGNk4671868_20241011225859.718.svg)

##### **game\_sales**

sale\_id

game\_id

platform\_id

sale\_date

units\_sold

sale\_amt

status

##### **game\_dimension**

game\_id

game\_name

release\_date

developer

publisher

##### platform\_dimension

platform\_id

platform\_name

type

##### **game\_sales\_details**

sale\_id

game\_id

platform\_id

sale\_date

units\_sold

sale\_amt

status

game\_name

release\_date

developer

publisher

platform\_name

type

#### **Solution description**

This solution replicates changes to dimension tables to Hologres in real time. This process consists of the following four steps:

1.  **Capture changes**: Capture real-time data changes from MongoDB dimension tables.
    
2.  **Propagate dimension table changes**: When a dimension table changes, a Flink job uses a lookup join (e.g., on `game_id`) to identify affected records in the MongoDB fact table and extract their primary keys, such as `sale_id`.
    
3.  **Trigger recalculation**: Send the primary keys to Kafka to notify downstream jobs of necessary data refreshes.
    
4.  **Incremental update**: Fetch the latest data, reconstruct wide tables, and upsert data to Hologres.
    

## Prerequisites

-   A Realtime Compute for Apache Flink workspace is created. Realtime Compute for Apache Flink must use VVR 8.0.5 or later. For more information, see [Activate Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
-   An ApsaraDB for MongoDB instance of version 4.0 or later is created. For more information, see [Create a sharded cluster instance](/help/en/mongodb/create-a-sharded-cluster-instance-1).
    
-   An exclusive Hologres instance of version 1.3 or later is created. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    
-   An ApsaraMQ for Kafka instance is created. For more information, see [Deploy an ApsaraMQ for Kafka instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-2-purchase-and-deploy-an-instance/).
    
-   The Realtime Compute for Apache Flink workspace, ApsaraDB for MongoDB instance, Hologres instance, and ApsaraMQ for Kafka instance reside in the same VPC. If they do not reside in the same VPC, you must establish connections between the VPCs or enable Realtime Compute for Apache Flink to access other services over the Internet. For more information, see [How does Realtime Compute for Apache Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#0f0ec3e8desii) and [How does Realtime Compute for Apache Flink access the Internet?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#ac35b98525siv)
    
-   The RAM user or RAM role has access to relevant resources.
    

## Step 1: Prepare the data

1.  Create a database and three tables in the ApsaraDB for MongoDB instance.
    
    1.  [Log on to your ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/manage-apsaradb-for-mongodb-instances-by-using-dms#section-n3a-2pg-z11).
        
    2.  Add the CIDR block of your Flink workspace to the whitelist of the ApsaraDB for MongoDB instance. For details, see [Configure a whitelist for an instance](/help/en/mongodb/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-2#task774) and [How do I configure a whitelist?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#d5b03d12d2zo3)
        
    3.  In the SQL editor of the [Data Management (DMS) console](https://dms.alibabacloud.com/new), create a database named `mongo_test` by running the following command:
        
        ```
        use mongo_test;
        ```
        
    4.  Create the `game_sales`, `game_dimension`, and `platform_dimension` tables in the database, and insert data into the tables.
        
        ```
        // Game sales table (status is a logical field, 1 means exists, 0 means deleted)
        db.game_sales.insert(
          [
        	{sale_id:0,game_id:101,platform_id:1,"sale_date":"2024-01-01",units_sold:500,sale_amt:2500,status:1},
          ]
        );
        
        // Game dimension table
        db.game_dimension.insert(
          [
        	{game_id:101,"game_name":"SpaceInvaders","release_date":"2023-06-15","developer":"DevCorp","publisher":"PubInc"},
        	{game_id:102,"game_name":"PuzzleQuest","release_date":"2023-07-20","developer":"PuzzleDev","publisher":"QuestPub"},
        	{game_id:103,"game_name":"RacingFever","release_date":"2023-08-10","developer":"SpeedCo","publisher":"RaceLtd"},
        	{game_id:104,"game_name":"AdventureLand","release_date":"2023-09-05","developer":"Adventure","publisher":"LandCo"},
          ]
        );
        
        // Platform dimension table
        db.platform_dimension.insert(
          [
        	{platform_id:1,"platform_name":"PCGaming","type":"PC"},
        	{platform_id:2,"platform_name":"PlayStation","type":"Console"},
        	{platform_id:3,"platform_name":"Mobile","type":"Mobile"}
          ]
        );
        ```
        
    5.  Query data in the tables:
        
        ```
        db.game_sales.find();
        db.game_dimension.find();
        db.platform_dimension.find();
        ```
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7736494371/p848057.png)
        
2.  Create a table in Hologres.
    
    1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/), click **Instances** in the left navigation pane, and then click the Hologres instance that you want to access. In the upper-right corner, click **Connect to Instance**.
        
    2.  In the top navigation bar, click **Metadata Management** and then click **Create Database**. In the pop-up window's **Database Name** field, enter `test`, and set **Policy** to **SPM**. For more information, see [Create a database](/help/en/hologres/getting-started/create-a-database#title-5io-o1e-t3x).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7736494371/p854977.png)
        
    3.  In the top navigation bar, click **SQL Editor**. In the upper-right corner of the Query side pane, click the SQL icon to create an SQL query. Choose the target instance and database, and copy the following code snippet to create a table named `game_sales_details`.
        
        ```
        CREATE TABLE game_sales_details(
          sale_id INT not null primary key,
          game_id INT,
          platform_id INT,
          sale_date VARCHAR(50),
          units_sold INT,
          sale_amt INT,
          status INT,
          game_name VARCHAR(50),
          release_date VARCHAR(50),
          developer VARCHAR(50),
          publisher VARCHAR(50),
          platform_name VARCHAR(50),
          type VARCHAR(50)
        );
        ```
        
3.  Create an ApsaraMQ for Kafka topic.
    
    1.  Log on to the [ApsaraMQ for Kafka console](https://kafka.console.alibabacloud.com/). Click **Instances** in the left-side navigation pane, and click your instance.
        
    2.  In the left navigation pane, click **Whitelist Management**. Add the CIDR block of your Flink workspace to a newly created or an existing whitelist.
        
    3.  In the left-side navigation pane, click **Topics**. Choose **Create Topic**. In the right-side pane that appears, enter `game_sales_fact` in the Name field, enter a description in the Description field, and use the default values of other fields. Click **OK**.
        

## Step 2: Create stream jobs

### Job 1: Write the PKs of data in game\_sales to Kafka

When the `game_sales` table or a dimension table is updated, the affected primary key (`sale_id`) is written to Kafka. If `game_sales` is updated, its `sale_id` is written directly. If a dimension table is updated, a lookup join with `game_sales` retrieves the associated `sale_id`, which is then written to Kafka.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5173471671/CAEQThiBgIDyxau90RkiIDNiNDJmMzM0ZDNmMzQ0NjdiNjI0NTZiNmYyY2E3OWQy4671868_20240920105929.264.svg)

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/).
    
2.  In the **Actions** column of your workspace, click **Console**.
    
3.  In the left navigation menu, click **Development** > **ETL**.
    
4.  Click **New Blank Stream Draft**.
    
    In the **New Draft** dialog, enter `dwd_mongo_kafka` in **Name** and select an engine version.
    
5.  Click **Create**.
    
6.  Write code.
    
    The code uses the [MongoDB connector](/help/en/flink/realtime-flink/developer-reference/mongodb-connector) to create the source table `game_sales` and the [Upsert Kafka connector](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector#concept-2306784) to create the Kafka topic `game_sales_fact`. To ensure security, avoid hardcoding plaintext passwords in code. Instead, use variables for sensitive information like passwords. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    > The three `INSERT` statements independently capture changes from `game_sales`, `game_dimension`, and `platform_dimension`. These changes are streamed in real time via `sale_id` to downstream jobs, ensuring the Hologres table is updated accurately, completely, and in real time.
    
    ```
    -- Create the game_sales table
    CREATE TEMPORARY TABLE game_sales
    (
      `_id`       STRING,    -- MongoDB auto-generated ID
      sale_id     INT,       -- Sales ID
      PRIMARY KEY (_id) NOT ENFORCED
    )
    WITH (
      'connector' = 'mongodb',      -- Use the MongoDB connector
      'uri' = '${secret_values.MongoDB-URI}', -- Variable for MongoDB URI
      'database' = 'mongo_test',    -- MongoDB database name
      'collection' = 'game_sales'   -- MongoDB table name
    );
    
    -- Create the game_dimension table
    CREATE TEMPORARY TABLE game_dimension
    (
      `_id`        STRING,
      game_id      INT,
      PRIMARY KEY (_id) NOT ENFORCED
    )
    WITH (
      'connector' = 'mongodb',
      'uri' = '${secret_values.MongoDB-URI}',
      'database' = 'mongo_test',
      'collection' = 'game_dimension'
    );
    
    -- Create the platform_dimension table
    CREATE TEMPORARY TABLE platform_dimension
    (
      `_id`         STRING,
      platform_id   INT,
      PRIMARY KEY (_id) NOT ENFORCED
    )
    WITH (
      'connector' = 'mongodb',
      'uri' = '${secret_values.MongoDB-URI}',
      'database' = 'mongo_test',
      'collection' = 'platform_dimension'
    );
    
    -- Create the game_sales_dim table
    CREATE TEMPORARY TABLE game_sales_dim
    (
      `_id`       STRING,
      sale_id     INT,
      game_id     INT,
      platform_id INT,
      PRIMARY KEY (_id) NOT ENFORCED
    )
    WITH (
      'connector' = 'mongodb',
      'uri' = '${secret_values.MongoDB-URI}',
      'database' = 'mongo_test',
      'collection' = 'game_sales'
    );
    
    -- Create a Kafka sink to store PKs
    CREATE TEMPORARY TABLE game_sales_fact (
      sale_id      INT,
      PRIMARY KEY (sale_id) NOT ENFORCED
    ) WITH (
      'connector' = 'upsert-kafka',
      'properties.bootstrap.servers' = '${secret_values.Kafka-hosts}',
      'topic' = 'game_sales_fact',
      'key.format' = 'json',
      'value.format' = 'json',
      'properties.enable.idempotence' = 'false'  -- When writing to an ApsaraMQ for Kafka sink, disable this option
      );
    
    BEGIN STATEMENT SET;
    
    -- Insert the PKs of the game_sales table
    INSERT INTO game_sales_fact (
      sale_id
    )
    SELECT
      sale_id
    FROM game_sales
    ;
    
    -- Join the game_dimension table with the game_sales_dim table. If data is updated, insert the PKs of the affected sale_id into the Kafka sink.
    INSERT INTO game_sales_fact (
       sale_id
    )
    select
      gs.sale_id
    from game_dimension as gd
    join game_sales_dim FOR SYSTEM_TIME AS OF PROCTIME() as gs
    on gd.game_id = gs.game_id;
    
    -- Join the platform_dimension table with the game_sales_dim table. If data is updated, insert the affected sale_id into the Kafka sink.
    INSERT INTO game_sales_fact (
       sale_id
    )
    select
      gs.sale_id
    from platform_dimension as pd
    join game_sales_dim FOR SYSTEM_TIME AS OF PROCTIME() as gs
    on pd.platform_id = gs.platform_id;
    
    END;
    ```
    
    **Note**
    
    -   This example uses the Upsert Kafka connector. For information about its differences from the standard Kafka connector, see [Choose Kafka, Upsert Kafka, or Kafka JSON catalog](/help/en/flink/realtime-flink/developer-reference/kafka-connector/#title-jev-mac-e2y).
        
    -   **Lookup join**: A lookup join associates dimension tables from an external data source with a fact table to enrich data streams. The prerequisites are as follows: a processing-time attribute is defined and an equivalent join condition exists. For more information about lookup joins of a dimension table with a fact table, see [JOIN statements for dimension tables](/help/en/flink/realtime-flink/developer-reference/join-statements-for-dimension-tables). In the following code snippet, the processing time attribute is defined using the `FOR SYSTEM_TIME AS OF` clause. This ensures that each `game_sales` row is joined with the corresponding dimension table row that matches the join predicate at the point in time when the `game_sales` row is processed by the join operator. Defining the processing time attribute also prevents the join result from being updated when a joined dimension table row is updated in the future. In the following SQL code snippet, the equivalent join condition is `gd.game_id = gsf.game_id` and `pd.platform_id = gsf.platform_id`.
        
    
7.  In the upper-right corner, click **Deploy**. In the dialog box, click **Confirm**.
    
    For more information , see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).
    

### **Job 2: Join MongoDB tables based on primary keys from Kafka and perform partial** update to the Hologres table

Create a job to join `game_sales` with changed PKs and individual dimension tables. This job also streams the affected data to Hologres when data in any of the tables is updated:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5173471671/CAEQThiBgMCc9e.90RkiIDY5ZGIzOWM4MWU4MTRjNjViZjZmNDkwNTdiNDRjMGI14671868_20240920105929.264.svg)

Follow the steps in [Job 1](#0de72cc4b8iro) to create a new draft named `dws_kafka_mongo_holo` and deploy it. The following code uses the [Hologres connector](/help/en/flink/realtime-flink/developer-reference/hologres-connector/) to create the sink table `game_sales_details`.

> This job consumes `sale_id`s from the `game_sales_fact` Kafka topic. It then performs temporal lookup joins (using `FOR SYSTEM_TIME AS OF PROCTIME()`) between the `game_sales` fact table and its related dimension tables in MongoDB, driven by these Kafka-sourced `sale_id`s. The results are used to upsert data into the Hologres `game_sales_details` table, ensuring real-time, accurate, and complete state reflection.

```
-- Create a Kafka table to store and consume primary keys
CREATE TEMPORARY TABLE game_sales_fact
(
  sale_id  INT
  ,PRIMARY KEY (sale_id) NOT ENFORCED
)
WITH (
  'connector' = 'upsert-kafka'
  ,'properties.bootstrap.servers' = '${secret_values.Kafka-hosts}'
  ,'topic' = 'game_sales_fact'
  ,'key.format' = 'json'
  ,'value.format' = 'json'
  ,'properties.group.id' = 'game_sales_fact'
  ,'properties.auto.offset.reset' = 'earliest'
);

-- Create the game_sales table
CREATE TEMPORARY TABLE game_sales
(
  `_id`       STRING,
  sale_id     INT,
  game_id     INT,
  platform_id INT,
  sale_date   STRING,
  units_sold  INT,
  sale_amt    INT,
  status      INT,
  PRIMARY KEY (_id) NOT ENFORCED
)
WITH (
  'connector' = 'mongodb',
  'uri' = '${secret_values.MongoDB-URI}',
  'database' = 'mongo_test',
  'collection' = 'game_sales'
);


-- Create the game_dimension table
CREATE TEMPORARY TABLE game_dimension
(
  `_id`        STRING,
  game_id      INT,
  game_name    STRING,
  release_date STRING,
  developer    STRING,
  publisher    STRING,
  PRIMARY KEY (_id) NOT ENFORCED
)
WITH (
  'connector' = 'mongodb',
  'uri' = '${secret_values.MongoDB-URI}',
  'database' = 'mongo_test',
  'collection' = 'game_dimension'
);

-- Create the platform_dimension table
CREATE TEMPORARY TABLE platform_dimension
(
  `_id`          STRING
  ,platform_id   INT
  ,platform_name STRING
  ,type          STRING
  ,PRIMARY KEY (_id) NOT ENFORCED
)
WITH (
  'connector' = 'mongodb',
  'uri' = '${secret_values.MongoDB-URI}',
  'database' = 'mongo_test',
  'collection' = 'platform_dimension'
);

-- Create the game_sales_details sink table
CREATE TEMPORARY TABLE IF NOT EXISTS game_sales_details
(
  sale_id       INT,
  game_id       INT,
  platform_id   INT,
  sale_date     STRING,
  units_sold    INT,
  sale_amt      INT,
  status        INT,
  game_name     STRING,
  release_date  STRING,
  developer     STRING,
  publisher     STRING,
  platform_name STRING,
  type          STRING,
  PRIMARY KEY (sale_id) NOT ENFORCED
)
WITH (
  -- Hologres connector options for VVR 11.
  'connector' = 'hologres',
  'dbname' = 'test', -- Hologres database name
  'tablename' = 'public.game_sales_details', -- Hologres table name
  'username' = '${secret_values.AccessKeyID}', -- AccessKey ID of your Alibaba Cloud account
  'password' = '${secret_values.AccessKeySecret}', -- AccessKey secret of your Alibaba Cloud account
  'endpoint' = '${secret_values.Hologres-endpoint}', -- VPC endpoint of your Hologres instance
  'sink.delete-strategy'='IGNORE_DELETE',       -- Policy for handling retracted messages. IGNORE_DELETE insert or update data, not delete it.
  'sink.on-conflict-action'='INSERT_OR_UPDATE', -- Update mode. Enable this to perform partial column updates.
  'sink.partial-insert.enabled'='true'
);

INSERT INTO game_sales_details (
  sale_id,
  game_id,
  platform_id,
  sale_date,
  units_sold,
  sale_amt,
  status,
  game_name,
  release_date,
  developer,
  publisher,
  platform_name,
  type
)
select
  gsf.sale_id,
  gs.game_id,
  gs.platform_id,
  gs.sale_date,
  gs.units_sold,
  gs.sale_amt,
  gs.status,
  gd.game_name,
  gd.release_date,
  gd.developer,
  gd.publisher,
  pd.platform_name,
  pd.type
from game_sales_fact as gsf
join game_sales FOR SYSTEM_TIME AS OF PROCTIME() as gs
on gsf.sale_id = gs.sale_id

join game_dimension FOR SYSTEM_TIME AS OF PROCTIME() as gd
on gs.game_id = gd.game_id

join platform_dimension FOR SYSTEM_TIME AS OF PROCTIME() as pd
on gs.platform_id = pd.platform_id;
```

## **Step 3: Start the jobs**

1.  In the Development Console's left navigation menu, choose **O&M** > **Deployments**. On the **Deployments** page, start the two job deployments.
    
2.  After the job states change to running, go to [HoloWeb](https://holoweb-cn-hangzhou.data.aliyun.com/) to query the `game_sales_details` table.
    
    ```
    SELECT * FROM game_sales_details;
    ```
    
    You can see a new data row is inserted into the table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966062.png)
    

## Step 4: Update and query data

Updates to the MongoDB `game_sales` and dimension tables are synced to Hologres for query and analysis. The following examples show how data is updated in real time.

### `**game_sales**` **table update**

1.  Insert five rows to the `game_sales` table in MongoDB:
    
    ```
    db.game_sales.insert(
      [
    	{sale_id:1,game_id:101,platform_id:1,"sale_date":"2024-01-01",units_sold:500,sale_amt:2500,status:1},
    	{sale_id:2,game_id:102,platform_id:2,"sale_date":"2024-08-02",units_sold:400,sale_amt:2000,status:1},
    	{sale_id:3,game_id:103,platform_id:1,"sale_date":"2024-08-03",units_sold:300,sale_amt:1500,status:1},
    	{sale_id:4,game_id:101,platform_id:3,"sale_date":"2024-08-04",units_sold:200,sale_amt:1000,status:1},
    	{sale_id:5,game_id:104,platform_id:2,"sale_date":"2024-08-05",units_sold:100,sale_amt:3000,status:1}
      ]
    );
    ```
    
    Query the Hologres `game_sales_details` table, and you can see corresponding rows are inserted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966066.png)
    
2.  Change the `sale_date` field value in the MongoDB `game_sales` table from '2024-01-01' to '2024-08-01'.
    
    ```
    db.game_sales.updateMany({"sale_date": "2024-01-01"}, {$set: {"sale_date": "2024-08-01"}});
    ```
    
    Query the `game_sales_details` table in Hologres. You can find that the sale\_date field value is changed from '2024-01-01' to '2024-08-01'.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966068.png)
    
3.  Perform a logical delete on the `game_sales` table in ApsaraDB for MongoDB by changing the `status` value to 0 for the row where `sale_id` is 5.
    
    ```
    db.game_sales.updateMany({"sale_id": 5}, {$set: {"status": 0}});
    ```
    
    Query the `game_sales_details` table in Hologres. You can see the value of the `status` column for the record where `sale_id` is 5 has been changed to 0. This completes the logical delete.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966073.png)
    

### **Dimension table update**

1.  Insert new rows into `game_dimension` and `platform_dimension` tables.
    
    ```
    // Game dimension table
    db.game_dimension.insert(
      [
    	{game_id:105,"game_name":"HSHWK","release_date":"2024-08-20","developer":"GameSC","publisher":"GameSC"},
    	{game_id:106,"game_name":"HPBUBG","release_date":"2018-01-01","developer":"BLUE","publisher":"KK"}
      ]
    );
    
    // Platform dimension table
    db.platform_dimension.insert(
      [
    	{platform_id:4,"platform_name":"Steam","type":"PC"},
    	{platform_id:5,"platform_name":"Epic","type":"PC"}
      ]
    );
    ```
    
    Inserting new data into dimension tables alone does not initiate data synchronization from MongoDB to Hologres. This synchronization process is triggered by changes to the `game_sales` table, which results from purchases or downloads. Therefore, you need to insert data into the `game_sales` table.
    
    ```
    // Game sales table
    db.game_sales.insert(
      [
    	{sale_id:6,game_id:105,platform_id:4,"sale_date":"2024-09-01",units_sold:400,sale_amt:2000,,status:1},
    	{sale_id:7,game_id:106,platform_id:1,"sale_date":"2024-09-01",units_sold:300,sale_amt:1500,,status:1}
      ]
    );
    ```
    
    Verify the update by querying the Hologres `game_sales_details` table. You can find that two new data records are inserted.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966077.png)
    
2.  Update data in the MongoDB `game_dimension` and `platform_dimension` tables.
    
    ```
    // Update the release date
    db.game_dimension.updateMany({"release_date": "2018-01-01"}, {$set: {"release_date": "2024-01-01"}});
    
    // Update the platform type
    db.platform_dimension.updateMany({"type": "PC"}, {$set: {"type": "Swich"}});
    ```
    
    You can find that related fields are updated in the Hologres table.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4173471671/p966081.png)
    

## References

-   [Build a real-time data warehouse with Flink and Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres)
    
-   [Build a streaming data lakehouse by using Realtime Compute for Apache Flink, Apache Paimon, and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon)
    
-   [Which MongoDB versions are supported by the MongoDB CDC connector?](/help/en/flink/realtime-flink/support/faq-about-cdc#d6095d7e7d9ox)
    
-   [Can the MongoDB CDC connector read data from the checkpoints of a deployment after the deployment restarts? What is the working principle?](/help/en/flink/realtime-flink/support/faq-about-cdc#b78e685223co5)
