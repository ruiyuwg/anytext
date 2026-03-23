Develop Flink CDC jobs (public preview) 

Realtime Compute for Apache Flink uses Flink CDC to help you develop YAML jobs that synchronize data from a source to a destination. This topic describes how to develop a Flink CDC data ingestion job.

## **Background information**

Flink CDC data ingestion uses [Flink CDC](https://nightlies.apache.org/flink/flink-cdc-docs-master/zh/docs/get-started/introduction/) for data integration. You can use YAML configurations to easily define complex extract, transform, and load (ETL) pipelines that are automatically converted into Flink computing logic. This feature efficiently supports full database synchronization, single-table synchronization, sharded database and table synchronization, synchronization of newly added tables, schema evolution, and synchronization of custom computed columns. It also supports ETL processing, WHERE clause filtering, and column pruning. This greatly simplifies the data integration process and improves the efficiency and reliability of data integration.

## **Advantages of Flink CDC**

In Realtime Compute for Apache Flink, you can develop a Flink CDC data ingestion job, a SQL job, or a DataStream job to synchronize data. The following sections describe the advantages of Flink CDC data ingestion jobs over the other two types of jobs.

### **Flink CDC vs. Flink SQL**

Flink CDC data ingestion jobs and SQL jobs use different data types to transfer data:

-   SQL jobs transfer RowData, while Flink CDC jobs transfer DataChangeEvent and SchemaChangeEvent. Each RowData in a SQL job has its own change type. The four main types are insert (+I), update\_before (-U), update\_after (+U), and delete (-D).
    
-   Flink CDC uses SchemaChangeEvent to transfer schema change information, such as table creation, column addition, and table truncation. DataChangeEvent is used to transfer data changes, such as inserts, updates, and deletes. Update messages contain the content before and after the update. This lets you write the raw change data to the destination.
    

The following table describes the advantages of Flink CDC data ingestion jobs over SQL jobs.

**Flink CDC data ingestion**

**Flink SQL**

Automatically detects schemas and supports full database synchronization.

Requires you to manually write CREATE TABLE and INSERT statements.

Supports multiple schema evolution policies.

Does not support schema evolution.

Supports raw changelog synchronization.

Alters the raw changelog structure.

Supports reading data from and writing data to multiple tables.

Reads data from and writes data to a single table.

Compared with CTAS or CDAS statements, Flink CDC jobs provide more powerful features. Flink CDC jobs support the following features:

-   Immediately synchronizes schema evolution in an ancestor table without waiting for new data to be written.
    
-   Supports raw changelog synchronization. Update messages are not split.
    
-   Synchronizes more types of schema evolution, such as TRUNCATE TABLE and DROP TABLE.
    
-   Supports table mapping to flexibly define destination table names.
    
-   Supports flexible and configurable schema evolution behavior.
    
-   Supports data filtering using a WHERE clause.
    
-   Supports column pruning.
    

### Flink CDC **vs. Flink DataStream**

The following table describes the advantages of Flink CDC data ingestion jobs over DataStream jobs.

**Flink CDC data ingestion**

**Flink DataStream**

Designed for users at all levels, not just experts.

Requires familiarity with Java and distributed systems.

Hides underlying details to simplify development.

Requires familiarity with the Flink framework.

Uses the YAML format that is easy to understand and learn.

Requires knowledge of tools such as Maven to manage dependencies.

Allows you to easily reuse existing jobs.

Makes it difficult to reuse existing code.

## Limits

-   You must use Ververica Runtime (VVR) 11.1 to develop Flink CDC data ingestion jobs. To use VVR 8.x, you must use VVR 8.0.11.
    
-   You can synchronize data from only one source to one destination. To read data from multiple data sources or write data to multiple destinations, you must create multiple Flink CDC jobs.
    
-   You cannot deploy Flink CDC jobs to a session cluster.
    
-   Automatic tuning is not supported for Flink CDC jobs.
    

## Flink CDC **data ingestion connectors**

The following table lists the connectors that are supported as sources and destinations for Flink CDC data ingestion jobs.

**Note**

You can provide feedback on the upstream and downstream storage that you are interested in through channels such as a [ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) or DingTalk. We plan to support more storage options in the future to better meet your needs.

### Supported connectors

**Connector**

**Supported type**

**Source**

**Sink**

[MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/)

**Note**

Supports connections to RDS for MySQL, PolarDB for MySQL, and self-managed MySQL.

√

×

[Streaming data lakehouse Paimon](/help/en/doc-detail/2261190.html)

×

√

[Message Queue for Kafka](/help/en/flink/realtime-flink/developer-reference/kafka-connector/)

√

**Note**

Supported only in VVR 8.0.10 and later.

√

[Upsert Kafka](/help/en/flink/realtime-flink/developer-reference/upsert-kafka-connector)

×

√

[StarRocks](/help/en/flink/realtime-flink/developer-reference/starrocks-connector)

×

√

[Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/)

×

√

[Simple Log Service (SLS)](/help/en/flink/realtime-flink/developer-reference/log-service-connector)

√

**Note**

Supported only in VVR 11.1 and later.

×

[MongoDB](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)

√

**Note**

Supported only in VVR 11.2 and later.

×

[MaxCompute](/help/en/flink/realtime-flink/developer-reference/maxcompute-connector)

×

√

**Note**

Supported only in VVR 11.1 and later.

[SelectDB](/help/en/flink/realtime-flink/developer-reference/selectdb)

×

√

**Note**

Supported only in VVR 11.1 and later.

[Postgres CDC (Public Preview)](/help/en/flink/realtime-flink/developer-reference/postgresql-cdc-connector/)

√

**Note**

Supported only in VVR 11.4 and later.

×

[Print](/help/en/flink/realtime-flink/developer-reference/print-connector)

×

√

[Iceberg](/help/en/flink/realtime-flink/developer-reference/apache-iceberg-connector)

×

√

**Note**

Supported only in VVR 11.6 and later.

#### Reuse an existing catalog to get connection information

Starting from VVR 11.5, you can reference a built-in catalog from the Data Management page in your Flink CDC data ingestion job. This retrieves connection properties, such as URL, username, and password, and reduces the need for manual entry.

##### **Syntax**

```
source:
  type: mysql
  using.built-in-catalog: mysql_rds_catalog
  
sink:
  type: paimon
  using.built-in-catalog: paimon_dlf_catalog
```

You can use the `using.built-in-catalog` syntax in the `source` and `sink` modules to reference an existing built-in catalog.

For example, in the preceding code, the catalog metadata for `mysql_rds_catalog` already includes required parameters such as `hostname`, `username`, and `password`. You do not need to specify these parameters again in the YAML job.

##### **Limits**

The following connectors support reusing connection information from a catalog:

-   MySQL (source)
    
-   Kafka (source)
    
-   Upsert Kafka (sink)
    
-   StarRocks (sink)
    
-   Hologres (sink)
    
-   Paimon (sink)
    
-   SLS (source)
    
-   Iceberg (sink)
    

**Note**

Catalog parameters that are incompatible with CDC YAML do not take effect. For more information, see the parameter list for each connector.

## Create a Flink CDC data ingestion job

## Generate from a synchronization job template

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Click **Console** in the **Actions** column of the target workspace.
    
3.  In the navigation pane on the left, select **Development** > **Data Ingestion**.
    
4.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1239386571/p1002018.png), and then click **Create From Template**.
    
5.  Select a data synchronization template.
    
    Currently, only the MySQL to StarRocks, MySQL to Paimon, and MySQL to Hologres templates are supported.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5713463671/p931565.png)
    
6.  Enter the job name, storage location, and engine version, and click **OK**.
    
7.  Configure the source and sink information for the Flink CDC job.
    
    For more information about parameter settings, see the documentation for the corresponding connector.
    

## Generate from a CTAS/CDAS job

**Important**

-   If a job contains multiple CXAS statements, Flink detects and transforms only the first statement.
    
-   Because of differences in built-in function support between Flink SQL and Flink CDC, the generated transform rules may not be ready to use. You must manually confirm and adjust the rules.
    
-   If the source is MySQL and the original CTAS/CDAS job is running, you must adjust the server ID of the source for the Flink CDC data ingestion job to prevent conflicts with the original job.
    

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Click **Console** in the **Actions** column of the target workspace.
    
3.  In the navigation pane on the left, select **Data Studio** > **Data Ingestion**.
    
4.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1239386571/p1002018.png), click **New Draft From CTAS/CDAS**, select the target CTAS or CDAS job, and then click **OK**.
    
    On the selection page, the system displays only valid CTAS and CDAS jobs. Normal ETL jobs or job drafts that have syntax errors are not displayed.
    
5.  Enter the job name, storage location, and engine version, and click **OK**.
    

## Migrating Jobs from the Open Source Community

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Click **Console** in the **Actions** column of the target workspace.
    
3.  In the navigation pane on the left, select **Development** > **Data Ingestion**.
    
4.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1239386571/p1002018.png) and select **New Data Ingestion Draft**. Set the **File Name** and **Engine Version**, and click **Create**.
    
5.  Copy the Flink CDC job from the open source community.
    
6.  (Optional) Click **Depth Check**.
    
    You can check the syntax, network connectivity, and access permissions.
    

## Create a Flink CDC data ingestion job from scratch

1.  Log on to the [Realtime Compute for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
2.  Click **Console** in the **Actions** column of the target workspace.
    
3.  In the navigation pane on the left, select **Data Development** > **Data Ingestion**.
    
4.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1239386571/p1002018.png), select **New Data Ingestion Draft**, enter the **File Name** and **Engine Version**, and click **Create**.
    
5.  Configure the Flink CDC job.
    
    ```
    # Required
    source:
      # Data source type
      type: <Replace with your source connector type>
      # Data source configurations. For more information about the configuration items, see the documentation for the corresponding connector.
      ...
    
    # Required
    sink:
      # Destination type
      type: <Replace with your destination connector type>
      # Destination configurations. For more information about the configuration items, see the documentation for the corresponding connector.
      ...
    
    # Optional
    transform:
      # Transformation rule for the flink_test.customers table
      - source-table: flink_test.customers
        # Projection configuration. Specifies the columns to synchronize and performs data transformation.
        projection: id, username, UPPER(username) as username1, age, (age + 1) as age1, test_col1, __schema_name__ || '.' || __table_name__ identifier_name
        # Filter condition. Synchronizes only data where id is greater than 10.
        filter: id > 10
        # Description of the transformation rule
        description: append calculated columns based on source table
    
    # Optional
    route:
      # Routing rule that specifies the mapping between source and destination tables.
      - source-table: flink_test.customers
        sink-table: db.customers_o
        # Description of the routing rule
        description: sync customers table
      - source-table: flink_test.customers_suffix
        sink-table: db.customers_s
        # Description of the routing rule
        description: sync customers_suffix table
    
    #Optional
    pipeline:
      # Job name
      name: MySQL to Hologres Pipeline
    ```
    
    **Note**
    
    In a Flink CDC job, a key and a value must be separated by a space. The format is `Key: Value`.
    
    The code blocks are described as follows.
    
    **Required**
    
    **Code module**
    
    **Description**
    
    Required
    
    source (data source)
    
    The start of the data pipeline. Flink CDC captures change data from the data source.
    
    **Note**
    
    -   Currently, only MySQL is supported as a data source. For more information about the configuration items, see [MySQL](/help/en/flink/realtime-flink/developer-reference/mysql-connector/).
        
    -   You can use variables to set sensitive information. For more information, see [Variable Management](/help/en/flink/realtime-flink/user-guide/manage-keys).
        
    
    sink (destination)
    
    The end of the data pipeline. Flink CDC transmits the captured data changes to these destination systems.
    
    **Note**
    
    -   For information about supported destination systems, see [Flink CDC data ingestion connectors](#81f0c543a5c8a). For more information about destination configuration items, see the documentation for the corresponding connector.
        
    -   You can use variables to set sensitive information. For more information, see [Variable Management](/help/en/flink/realtime-flink/user-guide/manage-keys).
        
    
    Optional
    
    pipeline
    
    (data pipeline)
    
    Defines basic configurations for the entire data pipeline job, such as the pipeline name.
    
    transform (data transformation)
    
    Specifies data transformation rules. A transformation is an operation on data that flows through a Flink pipeline. This module supports ETL processing, WHERE clause filtering, column pruning, and computed columns.
    
    You can use transform when the raw change data captured by Flink CDC needs to be transformed to adapt to specific downstream systems.
    
    route (routing)
    
    If this module is not configured, it indicates full database or target table synchronization.
    
    In some cases, the captured change data may need to be sent to different destinations based on specific rules. The routing mechanism lets you flexibly specify the mapping between upstream and downstream systems and send data to different data destinations.
    
    For more information about the syntax structure and configuration items of each module, see [Development Reference for Flink CDC data ingestion jobs](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/).
    
    The following code provides an example of how to synchronize all tables from the app\_db database in MySQL to a database in Hologres.
    
    ```
    source:
      type: mysql
      hostname: <hostname>
      port: 3306
      username: ${secret_values.mysqlusername}
      password: ${secret_values.mysqlpassword}
      tables: app_db.\.*
      server-id: 5400-5404
      # (Optional) Synchronize data from newly created tables in the incremental phase.
      scan.binlog.newly-added-table.enabled: true
      # (Optional) Synchronize table and field comments.
      include-comments.enabled: true
      # (Optional) Prioritize dispatching unbounded chunks to prevent potential TaskManager OutOfMemory issues.
      scan.incremental.snapshot.unbounded-chunk-first.enabled: true
      # (Optional) Enable parsing filters to accelerate reads.
      scan.only.deserialize.captured.tables.changelog.enabled: true
    
    sink:
      type: hologres
      name: Hologres Sink
      endpoint: <endpoint>
      dbname: <database-name>
      username: ${secret_values.holousername}
      password: ${secret_values.holopassword}
    
    pipeline:
      name: Sync MySQL Database to Hologres
    ```
    
6.  (Optional) Click **Depth Check**.
    
    You can check the syntax, network connectivity, and access permissions.
    

## References

-   After you develop a Flink CDC job, you need to deploy it. For more information, see [Deploy a job](/help/en/flink/realtime-flink/user-guide/create-a-deployment).
    
-   To quickly build a Flink CDC job that synchronizes data from a MySQL database to StarRocks, see [Quick Start for Flink CDC data ingestion jobs](/help/en/flink/realtime-flink/getting-started/quick-start-for-data-ingestion-yaml-jobs).
