This topic describes how to use the Iceberg connector.

## Background information

[Apache Iceberg](https://iceberg.apache.org/) is an open table format for data lakes. You can use Apache Iceberg to build a low-cost, scalable data lake storage service on Hadoop Distributed File System (HDFS) or Object Storage Service (OSS). You can then analyze data in your data lake using compute engines from the open source big data ecosystem, such as Flink, Spark, Hive, and Presto.

**Category**

**Details**

Supported type

Source table, sink table, and data ingestion destination

Runtime mode

Batch mode and stream mode

Data format

Not applicable

Specific monitoring metrics

None

API type

SQL, YAML jobs for data ingestion

Supports data updates or deletions in sink tables

Yes

## Features

Apache Iceberg provides the following core features:

-   A lightweight, cost-effective data lake storage service built on HDFS or OSS.
    
-   Full support for atomicity, consistency, isolation, and durability (ACID) semantics.
    
-   Support for historical version rollbacks.
    
-   Efficient data filtering.
    
-   Schema evolution.
    
-   Partition evolution.
    
-   Compatibility with a self-managed Hive Metastore. For more information, see [Use a Hive Catalog with a self-managed Hive Metastore (HMS)](#8b3f2b74093ex).
    

**Note**

You can use Flink’s fault tolerance and stream processing capabilities to ingest large volumes of log and behavioral data into an Apache Iceberg data lake in real time. You can then use Flink or other analytics engines to extract value from that data.

## Limits

-   The Iceberg connector is supported only in Flink compute engine Ververica Runtime (VVR) 4.0.8 and later. You must use the Iceberg connector with a Data Lake Formation (DLF) Catalog. For more information, see [Manage DLF-Legacy Catalogs](/help/en/flink/realtime-flink/user-guide/manage-dlf-catalogs).
    
-   The Iceberg connector supports Apache Iceberg v1 and v2 table formats. For more information, see [Iceberg Table Spec](https://iceberg.apache.org/spec/).
    
    **Note**
    
    The v2 table format is supported only in real-time computing engine VVR 8.0.7 and later.
    
-   In stream reading mode, only append-only Iceberg tables are supported as source tables.
    

## Syntax

```
CREATE TABLE iceberg_table (
  id    BIGINT,
  data  STRING
  PRIMARY KEY(`id`) NOT ENFORCED
)
 PARTITIONED BY (data)
 WITH (
 'connector' = 'iceberg',
  ...
);
```

## WITH parameters

### **General parameters (for source tables)**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

connector

The type of the source table.

String

Yes

None

The value must be `iceberg`.

catalog-name

The name of the catalog.

String

Yes

None

Enter a custom name in English.

catalog-database

The name of the database.

String

Yes

default

The name of the database that you created in DLF, such as dlf\_db.

**Note**

If you have not created a DLF database, create one.

io-impl

The implementation class of the distributed file system.

String

Yes

None

The value must be `org.apache.iceberg.aliyun.oss.OSSFileIO`.

oss.endpoint

The endpoint of Alibaba Cloud Object Storage Service (OSS).

String

No

None

For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

**Note**

-   We recommend that you set the oss.endpoint parameter to the VPC endpoint of OSS. For example, if you select the China (Hangzhou) region, set oss.endpoint to oss-cn-hangzhou-internal.aliyuncs.com.
    
-   To access OSS across VPCs, see [How do I access other services across VPCs?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#7e4dbb2506gos)
    

-   access.key.id: VVR 8.0.6 and earlier
    
-   access-key-id: VVR 8.0.7 and later
    

The AccessKey ID of your Alibaba Cloud account.

String

Yes

None

For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)

**Important**

To prevent your AccessKey information from being leaked, we recommend that you use variables for the AccessKey values. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).

-   access.key.secret: VVR 8.0.6 and earlier
    
-   access-key-secret: VVR 8.0.7 and later
    

The AccessKey secret of your Alibaba Cloud account.

String

Yes

None

catalog-impl

The class name of the catalog.

String

Yes

None

The value must be `org.apache.iceberg.aliyun.dlf.DlfCatalog`.

warehouse

The path in OSS where the table data is stored.

String

Yes

None

None.

dlf.catalog-id

The ID of your Alibaba Cloud account.

String

Yes

None

You can obtain the account ID from the [User Information](https://account-console.alibabacloud.com/?spm=5176.cngpdb.amxosvpfn.21.4ad17cacTR7tmU#/secure) page.

dlf.endpoint

The endpoint of the DLF service.

String

Yes

None

.

**Note**

-   We recommend that you set the dlf.endpoint parameter to the VPC endpoint of DLF. For example, if you select the China (Hangzhou) region, set the dlf.endpoint parameter to dlf-vpc.cn-hangzhou.aliyuncs.com.
    
-   To access DLF across VPCs, see [Storage space management and operations](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz)
    

dlf.region-id

The region of the DLF service.

String

Yes

None

.

**Note**

This region must be the same as the region selected for dlf.endpoint.

uri

The Thrift URI of the Hive metastore.

String

Required only when you use a Hive Catalog.

None

Use this parameter with a self-managed Hive Metastore.

### **Parameters specific to sink tables**

**Parameter**

**Description**

**Data type**

**Required**

**Default value**

**Remarks**

write.operation

The write operation mode.

String

No

upsert

-   upsert (default): updates data.
    
-   insert: appends data.
    
-   bulk\_insert: performs bulk inserts without updates.
    

hive\_sync.enable

Specifies whether to enable metadata synchronization to Hive.

boolean

No

false

Valid values:

-   true: enables the feature.
    
-   false (default): disables the feature.
    

hive\_sync.mode

The Hive data synchronization mode.

String

No

hms

-   hms (default): Set this parameter to hms when you use a Hive Metastore or a DLF Catalog.
    
-   jdbc: Set this parameter to jdbc when you use a JDBC Catalog.
    

hive\_sync.db

The name of the Hive database to which you want to synchronize metadata.

String

No

The name of the database where the current table resides in the catalog.

None.

hive\_sync.table

The name of the Hive table to which you want to synchronize metadata.

String

No

The name of the current table.

None.

dlf.catalog.region

The region of the DLF service.

String

No

None

.

**Note**

-   The dlf.catalog.region parameter takes effect only when hive\_sync.mode is set to `hms`.
    
-   This region must be the same as the region selected for dlf.catalog.endpoint.
    

dlf.catalog.endpoint

The endpoint of the DLF service.

String

No

None

.

**Note**

-   The dlf.catalog.endpoint parameter takes effect only when hive\_sync.mode is set to hms.
    
-   We recommend that you set the dlf.catalog.endpoint parameter to the VPC endpoint of DLF. For example, if you select the China (Hangzhou) region, set the dlf.catalog.endpoint parameter to dlf-vpc.cn-hangzhou.aliyuncs.com.
    
-   To access DLF across VPCs, see [Storage space management and operations](/help/en/flink/realtime-flink/support/reference#section-b0b-5qz-thz)
    

## Type mapping

**Iceberg field type**

**Flink field type**

BOOLEAN

BOOLEAN

INT

INT

LONG

BIGINT

FLOAT

FLOAT

DOUBLE

DOUBLE

DECIMAL(P,S)

DECIMAL(P,S)

DATE

DATE

TIME

TIME

**Note**

The precision of Iceberg timestamps is microseconds, while the precision of Flink timestamps is milliseconds. When you use Flink to read data from Iceberg, the time precision is aligned to milliseconds.

TIMESTAMP

TIMESTAMP

TIMESTAMPTZ

TIMESTAMP\_LTZ

STRING

STRING

FIXED(L)

BYTES

BINARY

VARBINARY

STRUCT<...>

ROW

LIST<E>

LIST

MAP<K,V>

MAP

## Code examples

Make sure that you have created an OSS bucket and a DLF database. For more information, see [Create a bucket in the console](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb) and [Databases, tables, and functions](/help/en/dlf/dlf-1-0/user-guide/manage-metadata#section-454-z7w-bs4).

**Note**

When you create a DLF database and set the **Path**, we recommend that you use the ${warehouse}/${database\_name}.db format. For example, if the warehouse address is oss://iceberg-test/warehouse and the database name is dlf\_db, set the OSS path for dlf\_db to oss://iceberg-test/warehouse/dlf\_db.db.

### Sink table example

This example shows how to use the Datagen connector to randomly generate streaming data and write it to an Iceberg table.

```
CREATE TEMPORARY TABLE datagen(
  id    BIGINT,
  data  STRING
) WITH (
  'connector' = 'datagen'
);

CREATE TEMPORARY TABLE dlf_iceberg (
  id    BIGINT,
  data  STRING
) WITH (
  'connector' = 'iceberg',
  'catalog-name' = '<yourCatalogName>',
  'catalog-database' = '<yourDatabaseName>',
  'io-impl' = 'org.apache.iceberg.aliyun.oss.OSSFileIO',
  'oss.endpoint' = '<yourOSSEndpoint>',  
  'access.key.id' = '${secret_values.ak_id}',
  'access.key.secret' = '${secret_values.ak_secret}',
  'catalog-impl' = 'org.apache.iceberg.aliyun.dlf.DlfCatalog',
  'warehouse' = '<yourOSSWarehousePath>',
  'dlf.catalog-id' = '<yourCatalogId>',
  'dlf.endpoint' = '<yourDLFEndpoint>',  
  'dlf.region-id' = '<yourDLFRegionId>'
);

INSERT INTO dlf_iceberg SELECT * FROM datagen;
```

### Source table examples

-   Use a Hive Catalog with a self-managed Hive Metastore (HMS).
    
    Ensure that the Flink cluster can communicate with the HMS cluster over the network. The data is stored in the `oss://<bucket>/<path>/<database-name>/flink_table` directory.
    
    ```
    CREATE TEMOPORY TABLE flink_table (
      id   BIGINT,
      data STRING
    ) WITH (
      'connector'='iceberg',
      'catalog-name'='<yourCatalogName>',
      'catalog-database'='<yourDatabaseName>',
      'uri'='thrift://<ip>:<port>',
      'warehouse'='oss://<bucket>/<path>',
      'io-impl'='org.apache.iceberg.aliyun.oss.OSSFileIO',
      'access-key-id'='<yourAccessKeyId>',
      'access-key-secret'='<yourAccessKeySecret>',
      'oss.endpoint'='<yourOSSEndpoint>'
    );
    ```
    
-   Use a DLF Catalog to write data from an Iceberg source table to an Iceberg sink table.
    
    ```
    CREATE TEMPORARY TABLE src_iceberg (
      id    BIGINT,
      data  STRING
    ) WITH (
      'connector' = 'iceberg',
      'catalog-name' = '<yourCatalogName>',
      'catalog-database' = '<yourDatabaseName>',
      'io-impl' = 'org.apache.iceberg.aliyun.oss.OSSFileIO',
      'oss.endpoint' = '<yourOSSEndpoint>',  
      'access.key.id' = '${secret_values.ak_id}',
      'access.key.secret' = '${secret_values.ak_secret}',
      'catalog-impl' = 'org.apache.iceberg.aliyun.dlf.DlfCatalog',
      'warehouse' = '<yourOSSWarehousePath>',
      'dlf.catalog-id' = '<yourCatalogId>',
      'dlf.endpoint' = '<yourDLFEndpoint>',  
      'dlf.region-id' = '<yourDLFRegionId>'
    );
    
    CREATE TEMPORARY TABLE dst_iceberg (
      id    BIGINT,
      data  STRING
    ) WITH (
      'connector' = 'iceberg',
      'catalog-name' = '<yourCatalogName>',
      'catalog-database' = '<yourDatabaseName>',
      'io-impl' = 'org.apache.iceberg.aliyun.oss.OSSFileIO',
      'oss.endpoint' = '<yourOSSEndpoint>',  
      'access.key.id' = '${secret_values.ak_id}',
      'access.key.secret' = '${secret_values.ak_secret}',
      'catalog-impl' = 'org.apache.iceberg.aliyun.dlf.DlfCatalog',
      'warehouse' = '<yourOSSWarehousePath>',
      'dlf.catalog-id' = '<yourCatalogId>',
      'dlf.endpoint' = '<yourDLFEndpoint>',  
      'dlf.region-id' = '<yourDLFRegionId>'
    );
    
    BEGIN STATEMENT SET;
    
    INSERT INTO src_iceberg VALUES (1, 'AAA'), (2, 'BBB'), (3, 'CCC'), (4, 'DDD'), (5, 'EEE');
    INSERT INTO dst_iceberg SELECT * FROM src_iceberg;
    
    END;
    ```
    

## Data ingestion

You can use the Iceberg connector as a sink to write data in YAML jobs for data ingestion.

### **Syntax**

```
sink:
  type: iceberg
  name: Iceberg Sink
  catalog.properties.rest.signing-region: cn-beijing
  catalog.properties.uri: http://cn-beijing-vpc.dlf.aliyuncs.com/iceberg
  catalog.properties.warehouse: flink_iceberg
  catalog.properties.type: rest
  catalog.properties.io-impl: org.apache.iceberg.rest.DlfFileIO
```

### **Configuration items**

Parameter

Description

Required

Data type

Default value

Remarks

type

The connector type.

Yes

STRING

None

The value must be `iceberg`.

name

The name of the sink.

No

STRING

None

The name of the sink.

catalog.properties.rest.signing-region

The region ID of DLF. For more information, see [Endpoints](/help/en/dlf/dlf-2-0/getting-started/service-access-point).

Yes

STRING

None

None

catalog.properties.uri

The URI used to access the DLF REST Catalog. For more information, see [Iceberg REST](/help/en/dlf/dlf-2-0/getting-started/service-access-point#4a3f4200d6wpf).

Yes

STRING

None

None

catalog.properties.warehouse

The name of the DLF Catalog.

Yes

STRING

None

None

catalog.properties.warehouse

The root directory for file storage.

No

STRING

None

None

catalog.properties.type

The catalog type. The value must be rest.

Yes

STRING

rest

None

catalog.properties.io-impl

The value must be org.apache.iceberg.rest.DlfFileIO.

Yes

STRING

org.apache.iceberg.rest.DlfFileIO

None

partition.key

The partition field for each partitioned table.

No

STRING

None

The partition key for each partitioned table. You can set multiple primary keys for multiple tables. Use semicolons (`;`) to separate tables and commas (`,`) to separate partition keys. For example, you can use `testdb.table1:id1,id2;testdb.table2:name` to set the partition field for the `testdb.table1` table to `id1` and the partition field for the `testdb.table2` table to `name`.

For partitions that require implicit transforms, you can add an implicit transform function directly to the partition field. Examples: `testdb.table1:truncate[10](id);testdb.table2:hour(create_time);testdb.table3:day(create_time);testdb.table4:month(create_time);testdb.table5:year(create_time);testdb.table6:bucket[10](create_time)`.

table.properties.\*

The parameters for creating an Iceberg table.

No

String

None

For more information, see [Iceberg table options](https://iceberg.apache.org/docs/latest/configuration/#table-properties).

### **Usage example**

The following code provides a configuration example of writing data to Alibaba Cloud [Data Lake Formation](/help/en/dlf/dlf-2-0/product-overview/what-is-data-lake-formation) when the Iceberg Catalog is a DLF Catalog:

-   ```
    source:
      type: mysql
      name: MySQL Source
      hostname: ${secret_values.mysql.hostname}
      port: ${mysql.port}
      username: ${secret_values.mysql.username}
      password: ${secret_values.mysql.password}
      tables: ${mysql.source.table}
      server-id: 8601-8604
    
    sink:
      type: iceberg
      name: Iceberg Sink
      catalog.properties.rest.signing-region: cn-beijing
      catalog.properties.uri: http://cn-beijing-vpc.dlf.aliyuncs.com/iceberg
      catalog.properties.warehouse: flink_iceberg
      catalog.properties.type: rest
      catalog.properties.io-impl: org.apache.iceberg.rest.DlfFileIO
    ```
    
    For information about the parameters that have the catalog.properties prefix, see [Create an Iceberg DLF Catalog](/help/en/flink/realtime-flink/user-guide/manage-apache-iceberg-catalogs#310bb73631g6e).
    

### **Schema evolution**

Currently, Iceberg as a data ingestion sink supports the following schema evolution events:

-   CREATE TABLE EVENT
    
-   ADD COLUMN EVENT
    
-   ALTER COLUMN TYPE EVENT (Modifying the type of a primary key column is not supported)
    
-   RENAME COLUMN EVENT
    
-   DROP COLUMN EVENT
    
-   TRUNCATE TABLE EVENT
    
-   DROP TABLE EVENT
    

**Note**

If the downstream Iceberg table already exists, data is written based on the existing table schema. The system does not attempt to recreate the table.

## **References**

For information about the connectors that Flink supports, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
