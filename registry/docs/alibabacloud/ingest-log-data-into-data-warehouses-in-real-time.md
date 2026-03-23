This tutorial shows how to stream user records from ApsaraMQ for Kafka into a Hologres data warehouse using Realtime Compute for Apache Flink, with automatic schema evolution enabled. By the end, you will have a running Flink SQL job that continuously syncs data and adapts when the source schema changes.

## Architecture overview

The pipeline follows this data flow:

```
[Faker Connector] → [ApsaraMQ for Kafka] → [Realtime Compute for Apache Flink] → [Hologres]
```

A Faker connector generates synthetic user records and writes them to an ApsaraMQ for Kafka topic. Realtime Compute for Apache Flink reads from that topic, transforms the data using Flink SQL, and writes results to Hologres. All three services must reside in the same VPC.

## Steps in this tutorial

1.  Configure IP address allowlists
    
2.  Prepare test data for the ApsaraMQ for Kafka instance
    
3.  Create a Hologres catalog (CTAS method only)
    
4.  Develop and start a data synchronization job
    
5.  View the result of full data synchronization
    
6.  Check whether table schema changes are automatically synchronized
    

## Prerequisites

Before you begin, ensure that you have:

-   A RAM user or RAM role with permissions to access the Realtime Compute for Apache Flink development console. For more information, see [Permission management](/help/en/flink/realtime-flink/user-guide/permission-management/).
    
-   A Flink workspace. For more information, see [Activate Realtime Compute for Apache Flink](/help/en/flink/realtime-flink/getting-started/activate-fully-managed-flink).
    
-   An ApsaraMQ for Kafka instance. For more information, see [Purchase and deploy an instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-2-purchase-and-deploy-an-instance/).
    
-   A Hologres instance. For more information, see [Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance).
    

**Important**

Your ApsaraMQ for Kafka and Hologres instances must reside in the same VPC as your Flink workspace. If they are in different VPCs, connection errors will occur. If they are not in the same VPC, you must create connections among them before proceeding. For cross-VPC access options, see [How does Realtime Compute for Apache Flink access a service across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity) or [How does Realtime Compute for Apache Flink access the Internet?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity)

## Step 1: Configure IP address allowlists

Add the CIDR block of the vSwitch where your Flink workspace resides to the allowlists of both the Kafka and Hologres instances.

1.  Obtain the vSwitch CIDR block of your Flink workspace.
    
    1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/console/cell?spm=a2c4g.11186623.2.16.1a8023a9J8TiPV).
        
    2.  Find the target workspace and choose **More > Workspace Details** in the **Actions** column.
        
    3.  In the **Workspace Details** dialog box, copy the CIDR block of the vSwitch.
        
    
    ![vSwitch CIDR block in Workspace Details dialog](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628917271/p374253.png)
    
2.  [Add the CIDR block to the IP address allowlist of your Kafka instance](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/user-guide/configure-a-whitelist). Add the CIDR block to the allowlist for the VPC network endpoint.
    
    ![Kafka allowlist configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3853232561/p413522.png)
    
3.  [Add the CIDR block to the IP address allowlist of your Hologres instance](/help/en/hologres/security-and-compliance/configure-an-ip-address-whitelist).
    
    ![Hologres allowlist configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3966208461/p374354.png)
    

After completing this step, the CIDR block appears in the allowlist table of both instances, and Flink can reach both services over the VPC network.

## Step 2: Prepare test data for the ApsaraMQ for Kafka instance

Before building the main sync job, you need data in your Kafka topic. This step uses the built-in [Faker connector](/help/en/flink/realtime-flink/developer-reference/faker-connector) as a data generator to write 100 synthetic user records to your topic.

> You will need the `properties.bootstrap.servers` endpoint value in this step and again in Step 4. To get it: go to the ApsaraMQ for Kafka console, click the target instance name, find the **Endpoint Information** section on the Instance Details page, locate the VPC network endpoint, and copy the value in the **Domain Name** column. The format is `host:port,host:port,host:port`.

1.  [Create a topic](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/getting-started/step-3-create-resources) named `users` in the ApsaraMQ for Kafka console.
    
2.  Develop a Flink job to write data to the Kafka topic.
    
    1.  Log on to the [management console of Realtime Compute for Apache Flink](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Find the target workspace and click **Console** in the **Actions** column.
        
    3.  In the left-side navigation pane, choose **Development > ETL**. On the page that appears, click **New**.
        
    4.  In the **New Draft** dialog box, select **Blank Stream Draft** and click **Next**. Configure the draft:
        
        **Configuration item**
        
        **Example**
        
        **Description**
        
        Name
        
        kafka-data-input
        
        The name of the SQL draft. The draft name must be unique in the current namespace.
        
        Location
        
        Development
        
        The folder where the draft's code file is stored. By default, drafts are stored in the Development folder.
        
        Engine version
        
        vvr-8.0.11-flink-1.17
        
        Select the engine version from the drop-down list.
        
    5.  Click **Create**.
        
    6.  Copy and paste the following code into the SQL editor. Replace the `properties.bootstrap.servers` placeholder with your actual Kafka endpoint.
        
        ```
        CREATE TEMPORARY TABLE source (
          id INT,
          first_name STRING,
          last_name STRING,
          `address` ROW<`country` STRING, `state` STRING, `city` STRING>,
          event_time TIMESTAMP
        ) WITH (
          'connector' = 'faker',
          'number-of-rows' = '100',
          'rows-per-second' = '10',
          'fields.id.expression' = '#{number.numberBetween ''0'',''1000''}',
          'fields.first_name.expression' = '#{name.firstName}',
          'fields.last_name.expression' = '#{name.lastName}',
          'fields.address.country.expression' = '#{Address.country}',
          'fields.address.state.expression' = '#{Address.state}',
          'fields.address.city.expression' = '#{Address.city}',
          'fields.event_time.expression' = '#{date.past ''15'',''SECONDS''}'
        );
        
        CREATE TEMPORARY TABLE sink (
          id INT,
          first_name STRING,
          last_name STRING,
          `address` ROW<`country` STRING, `state` STRING, `city` STRING>,
          `timestamp` TIMESTAMP METADATA
        ) WITH (
          'connector' = 'kafka',
          'properties.bootstrap.servers' = 'alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092',
          'topic' = 'users',
          'format' = 'json'
        );
        
        INSERT INTO sink SELECT * FROM source;
        ```
        
        Replace the placeholder values:
        
        **Configuration item**
        
        **Example**
        
        **Description**
        
        `properties.bootstrap.servers`
        
        `alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092`
        
        The endpoints of Kafka brokers. Format: `host:port,host:port,host:port`. See the note above for retrieval instructions.
        
        `topic`
        
        `users`
        
        The name of the Kafka topic.
        
3.  Deploy and start the job. When the deployment reaches FINISHED, data has been written to the `users` topic. The following is a sample message written to ApsaraMQ for Kafka:
    
    1.  In the upper-right corner of the SQL editor, click **Deploy**.
        
    2.  In the **Deploy draft** dialog box, click **Confirm**.
        
    3.  [Configure resources for the job](/help/en/flink/realtime-flink/user-guide/configure-deployment-resources).
        
    4.  Before clicking **Start**: the Faker connector produces a bounded stream of exactly 100 records. The deployment reaches RUNNING state, writes all records to the Kafka topic, then transitions to FINISHED — typically within one minute. This is expected behavior, not an error.
        
    5.  Go to **O&M > Deployments**, find the target deployment, and click **Start** in the **Actions** column. For startup parameters, see [Start a deployment](/help/en/flink/realtime-flink/user-guide/start-a-deployment).
        
    
    ```
       {
         "id": 765,
         "first_name": "Barry",
         "last_name": "Pollich",
         "address": {
           "country": "United Arab Emirates",
           "state": "Nevada",
           "city": "Powlowskifurt"
         }
       }
    ```
    
    ![Deployment state showing RUNNING then FINISHED](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0598493171/p785162.png)
    

## Step 3: Create a Hologres catalog

> This step is required for the CTAS method only. If you plan to use the INSERT INTO method in Step 4, skip to Step 4.

For single-table synchronization using CTAS, create a Hologres catalog as the destination catalog in the development console of Realtime Compute for Apache Flink. This section covers the essential configuration items. For full details, see [Create a Hologres catalog](/help/en/flink/realtime-flink/user-guide/manage-hologres-catalogs).

**Configuration item**

**Description**

Catalog name

Enter a custom name. This example uses `holo`.

Endpoint

The endpoint of your Hologres instance.

Username

The AccessKey ID of your Alibaba Cloud account.

Password

The AccessKey secret of your Alibaba Cloud account.

Dbname

Enter the name of an existing database in Hologres. This example uses `flink_test_db`. Make sure the database already exists before proceeding — otherwise an error will occur. For more information, see [Create a database](/help/en/hologres/getting-started/create-a-database).

After the catalog is created, it appears in the left-side navigation pane of the development console.

## Step 4: Develop and start a data synchronization job

### Choose a synchronization method

If you are unsure which method to use, start with CTAS — it requires less manual setup and handles schema evolution automatically.

**CTAS**

**INSERT INTO**

**Table creation**

Flink creates the Hologres table automatically

Create the table manually in Hologres first

**JSON handling**

Nested columns are auto-expanded (`json.infer-schema.flatten-nested-columns.enable = true`)

Map nested JSON directly to a native JSONB column

**Schema evolution**

Hologres schema updates automatically when new nested columns appear

Manual schema updates required

**Requires Step 3**

Yes — Hologres catalog must be created first

No — connection is specified directly in the WITH clause

**Best for**

Quick setup; schema-flexible pipelines

Full control over column types; JSONB optimization

### Create the synchronization job

1.  Log on to the [management console of Realtime Compute for Apache Flink](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Find the target workspace and click **Console** in the **Actions** column.
    
3.  In the left-side navigation pane, choose **Development > ETL**. On the page that appears, click **New**.
    
4.  In the **New Draft** dialog box, select **Blank Stream Draft** and click **Next**. Configure the draft:
    
    **Configuration item**
    
    **Example**
    
    **Description**
    
    Name
    
    flink-quickstart-test
    
    The name of the SQL draft. The draft name must be unique in the current namespace.
    
    Location
    
    Development
    
    The folder where the draft's code file is stored.
    
    Engine version
    
    vvr-8.0.11-flink-1.17
    
    Select the engine version from the drop-down list.
    
5.  Click **Create**.
    
6.  Copy and paste one of the following code snippets into the SQL editor and replace the placeholder values with your actual values.
    

### Method 1: CTAS

The `CREATE TABLE AS` (CTAS) statement automatically creates the `sync_kafka_users` table in Hologres, eliminating the need to manually define column types as JSON or JSONB.

```
CREATE TEMPORARY TABLE kafka_users (
  `id` INT NOT NULL,
  `address` STRING,
  `offset` BIGINT NOT NULL METADATA,
  `partition` BIGINT NOT NULL METADATA,
  `timestamp` TIMESTAMP METADATA,
  `date` AS CAST(`timestamp` AS DATE),
  `country` AS JSON_VALUE(`address`, '$.country'),
  PRIMARY KEY (`partition`, `offset`) NOT ENFORCED
) WITH (
  'connector' = 'kafka',
  'properties.bootstrap.servers' = 'alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092',
  'topic' = 'users',
  'format' = 'json',
  'json.infer-schema.flatten-nested-columns.enable' = 'true', -- Automatically expand nested columns.
  'scan.startup.mode' = 'earliest-offset'
);

CREATE TABLE IF NOT EXISTS holo.flink_test_db.sync_kafka_users
WITH (
  'connector' = 'hologres'
) AS TABLE kafka_users;
```

> Declaring `partition` and `offset` as the primary key prevents duplicate data after a job failover. If data is retransmitted, Hologres retains only one copy per unique `partition` + `offset` combination.

Replace the placeholder values:

**Configuration item**

**Example**

**Description**

`properties.bootstrap.servers`

`alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092`

The endpoints of Kafka brokers. Format: `host:port,host:port,host:port`. For retrieval instructions, see the note in Step 2.

`topic`

`users`

The name of the Kafka topic.

### Method 2: INSERT INTO

Use the INSERT INTO statement to store nested JSON data as a native JSONB column in Hologres. Before running the job, create the `sync_kafka_users` table in Hologres manually.

```
CREATE TEMPORARY TABLE kafka_users (
  `id` INT NOT NULL,
  `address` STRING,             -- The data in this column is nested JSON data.
  `offset` BIGINT NOT NULL METADATA,
  `partition` BIGINT NOT NULL METADATA,
  `timestamp` TIMESTAMP METADATA,
  `date` AS CAST(`timestamp` AS DATE),
  `country` AS JSON_VALUE(`address`, '$.country')
) WITH (
  'connector' = 'kafka',
  'properties.bootstrap.servers' = 'alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092',
  'topic' = 'users',
  'format' = 'json',
  'json.infer-schema.flatten-nested-columns.enable' = 'true', -- Automatically expand nested columns.
  'scan.startup.mode' = 'earliest-offset'
);

CREATE TEMPORARY TABLE holo (
  `id` INT NOT NULL,
  `address` STRING,
  `offset` BIGINT,
  `partition` BIGINT,
  `timestamp` TIMESTAMP,
  `date` DATE,
  `country` STRING
) WITH (
  'connector' = 'hologres',
  'endpoint' = 'hgpostcn-****-cn-beijing-vpc.hologres.aliyuncs.com:80',
  'username' = '<your-accesskey-id>',
  'password' = '<your-accesskey-secret>',
  'dbname' = 'flink_test_db',
  'tablename' = 'sync_kafka_users'
);

INSERT INTO holo SELECT * FROM kafka_users;
```

Replace the placeholder values:

**Configuration item**

**Example**

**Description**

`properties.bootstrap.servers`

`alikafka-host1.aliyuncs.com:9092,alikafka-host2.aliyuncs.com:9092,alikafka-host3.aliyuncs.com:9092`

The endpoints of Kafka brokers. Format: `host:port,host:port,host:port`. For retrieval instructions, see the note in Step 2.

`topic`

`users`

The name of the Kafka topic.

`endpoint`

`hgpostcn-****-cn-beijing-vpc.hologres.aliyuncs.com:80`

The endpoint of the Hologres instance. Format: `<ip>:<port>`. To get this value: go to the Hologres console, click your instance name, and find the VPC endpoint in the **Network Information** section.

`username`

`<your-accesskey-id>`

The AccessKey ID of your Alibaba Cloud account. To protect your credentials, store them as variables rather than hardcoding them in plaintext. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).

`password`

`<your-accesskey-secret>`

The AccessKey secret of your Alibaba Cloud account.

`dbname`

`flink_test_db`

The name of the Hologres database.

`tablename`

`sync_kafka_users`

The name of the Hologres table. Create this table and define the required fields in Hologres before running the job. If the table is not in a public schema, use the format `schema.tableName`.

### Deploy and start the job

1.  Save the draft.
    
2.  Click **Deploy**.
    
3.  Go to **O&M > Deployments**, find the target deployment, and click **Start** in the **Actions** column. For startup parameters, see [Start a deployment](/help/en/flink/realtime-flink/user-guide/start-a-deployment).
    
4.  On the **Deployments** page, view the state and details of the deployment.
    
    ![Deployment state on the Deployments page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6578493171/p783310.png)
    

## Step 5: View the result of full data synchronization

After the synchronization job reaches RUNNING state, verify that data was written to Hologres.

1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance).
    
2.  On the **Instances** page, click the name of the target instance.
    
3.  In the upper-right corner of the page, click **Connect to Instance**.
    
4.  On the **Metadata Management** tab, view the schema and data of the `sync_kafka_users` table.
    
    -   **Table schema**: Double-click the name of the `sync_kafka_users` table to view the table schema. ![sync_kafka_users table schema](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3853232561/p413519.png) > **Note:** The `partition` and `offset` fields of Kafka are declared as the primary key for the Hologres table. If data is retransmitted due to a job failover, only one copy per unique `partition` + `offset` combination is stored.
        
    -   **Table data**: In the upper-right corner of the `sync_kafka_users` table page, click **Query table**. In the SQL editor, run the following statement and click **Running**:
        
        ```
        SELECT * FROM public.sync_kafka_users order by partition, "offset";
        ```
        
        The query returns 100 rows, matching the `'number-of-rows' = '100'` setting from the Faker connector.
        
        ![sync_kafka_users table data](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3853232561/p413525.png)
    
    ![sync_kafka_users table in Metadata Management](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3853232561/p413524.png)
    

## Step 6: Check whether table schema changes are automatically synchronized

When `json.infer-schema.flatten-nested-columns.enable` is set to `true` in the Kafka source table's WITH clause, Realtime Compute for Apache Flink automatically detects new nested columns in incoming messages and adds the corresponding columns to Hologres. The column path becomes the column name — for example, a nested field `house-points.house` is added as a column named `house-points.house`.

This step demonstrates schema evolution by sending a Kafka message that contains a new nested column and verifying that Hologres adds the corresponding columns automatically.

1.  In the ApsaraMQ for Kafka console, send a message that contains a new column.
    
    1.  Log on to the [ApsaraMQ for Kafka console](https://kafka.console.alibabacloud.com/?spm=a2c4g.11186623.2.22.6bf72638IfKzDm).
        
    2.  On the **Instances** page, click the name of the target instance.
        
    3.  In the left-side navigation pane, click **Topics**. Find the topic named `users`.
        
    4.  Click **Send Message** in the **Actions** column.
        
    5.  In the **Start to Send and Consume Message** panel, configure the parameters as follows.
        
        ![Send Message panel configuration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1606985471/p950665.png)
        
        **Configuration item**
        
        **Value**
        
        Method of Sending
        
        Select **Console**.
        
        Message Key
        
        `flinktest`
        
        Message Content
        
        Copy and paste the following JSON. The `house-points` field is a new nested column.
        
        Send to Specified Partition
        
        Select **Yes**.
        
        Partition ID
        
        `0`
        
        ```
        {
          "id": 100001,
          "first_name": "Dennise",
          "last_name": "Schuppe",
          "address": {
            "country": "Isle of Man",
            "state": "Montana",
            "city": "East Coleburgh"
          },
          "house-points": {
            "house": "Pukwudgie",
            "points": 76
          }
        }
        ```
        
    6.  Click **OK**.
        
2.  In the Hologres console, verify the schema and data changes in the `sync_kafka_users` table.
    
    1.  Log on to the [Hologres console](https://hologram.console.alibabacloud.com/#/instance).
        
    2.  On the **Instances** page, click the name of the target instance.
        
    3.  In the upper-right corner of the page, click **Connect to Instance**.
        
    4.  On the **Metadata Management** tab, double-click the name of the `sync_kafka_users` table.
        
    5.  In the upper-right corner of the `sync_kafka_users` table page, click **Query table**. In the SQL editor, run the following statement and click **Running**:
        
        ```
        SELECT * FROM public.sync_kafka_users order by partition, "offset";
        ```
        
    6.  View the table data. ![sync_kafka_users table data after schema change](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3853232561/p413558.png) The record with `id = 100001` appears in Hologres. The columns `house-points.house` and `house-points.points` are added to the table automatically.
        

## What's next

You have built a real-time log ingestion pipeline that streams user records from ApsaraMQ for Kafka into Hologres using Realtime Compute for Apache Flink, with automatic schema evolution enabled.

In this tutorial, you:

-   Configured network allowlists so Flink can access Kafka and Hologres.
    
-   Deployed a Faker-based data generator that writes 100 synthetic records to a Kafka topic.
    
-   Created a Flink SQL job that continuously syncs data from Kafka to Hologres.
    
-   Verified that schema changes (new nested columns) propagate automatically to Hologres.
    

To go further, explore these topics:

-   [CREATE TABLE AS (CTAS) statement](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement) — Learn about advanced CTAS options and behavior.
    
-   [Kafka connector](/help/en/flink/realtime-flink/developer-reference/kafka-connector/) — Explore full connector configuration options for production workloads.
    
-   [Configure a deployment](/help/en/flink/realtime-flink/user-guide/configure-a-deployment) — Tune resource allocation, checkpointing, and other deployment settings for production use.
